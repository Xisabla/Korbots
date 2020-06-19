import debug from 'debug'
import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import { YouTube } from 'popyt'
import { Socket } from 'socket.io'
import youtubedl, { Info } from 'youtube-dl'

import Application from '../core/Application'
import {
    DownloadedMusic,
    DownloadedVideo,
    dummyDownloadedVideo,
    SearchResult
} from '../core/IMusic'
import { ConversionStatus, YoutubeDownloadStatus } from '../core/IMusic'
import Module from '../core/Module'
import { IMusicSchema, Music } from '../models/Music'
import { Playlist } from '../models/Playlist'
import { mp4ToMp3 } from '../services/ffmpeg'

const log = debug('module:music')

export class MusicModule extends Module {
    /** Instance of the youtube API Controller */
    private youtube: YouTube

    /** Audio songs storage path */
    private mp3Storage: string
    /** Youtube Storage Path (folder for youtube mp4 files) */
    private youtubeStorage: string

    public register(app: Application): void {
        super.register(app)

        // Init internal storage
        this.youtubeStorage = app.getStorage('youtube')
        this.mp3Storage = app.getStorage('musics')

        // YouTube API handler
        this.youtube = new YouTube(Application.getAPIKey('google:youtube'))

        // Deserver audio stream on HTTP GET Request
        app.server.get('/music/:music', (req, res) =>
            this.handleHttpMusic(req, res)
        )

        log('Registered')
    }

    // ---- HTTP Audio Stream ------------------------

    /**
     * Handle the HTTP GET Request for the music streaming
     * Try to find the music and stream it, return 400, 404 or 500 on error
     * @param req HTTP Request
     * @param res HTTP Response
     */
    private handleHttpMusic(req: Request, res: Response) {
        const musicId = req.params.music

        log(`Received stream request for: ${musicId}`)

        // Look for the music
        Music.findById(musicId)
            .then((music) => {
                if (music) return this.httpAudioStream(req, res, music)

                // No entry in the database, 404
                log(`Music id not found: ${musicId}`)
                return this.httpMusicError(
                    req,
                    res,
                    {
                        message: 'Music id not found'
                    },
                    404
                )
            })
            // Return 400 on error, it is not a good ID format
            .catch((error) => {
                log(`Something went wrong with musicId: ${musicId}`)
                return this.httpMusicError(req, res, error, 400)
            })
    }

    /**
     * Stream the Music given
     * @param req HTTP Request
     * @param res HTTP Response
     * @param music Music to stream
     */
    private httpAudioStream(req: Request, res: Response, music: IMusicSchema) {
        const file = path.join(this.app.getStorage(), music.path)

        if (!fs.existsSync(file)) {
            log(`Audio file not found for music: ${music.id}`)
            return this.httpMusicError(req, res, {
                message: 'Music file not found'
            })
        }

        const stat = fs.statSync(file)
        const size = stat.size

        log(`Audio file found for music id: ${music.id}, size: ${size}`)

        if (req.headers.range) {
            return this.httpAudioStreamRange(req, res, file, size)
        }

        log(`Direct streaming ${music.id}`)
        res.writeHead(200, {
            'Content-Length': size,
            'Content-Type': 'audio/mpeg'
        })

        return fs.createReadStream(file).pipe(res)
    }

    /**
     * Stream the music file according to the range given by the HTTP Request
     * @param req HTTP Request
     * @param res HTTP Response
     * @param file Music file
     * @param size Size of the music file
     */
    private httpAudioStreamRange(
        req: Request,
        res: Response,
        file: string,
        size: number
    ) {
        const range = req.headers.range
        const parts = range.replace(/bytes=/, '').split('-')

        const start = parseInt(parts[0], 10)
        const end = parts[1] ? parseInt(parts[1]) : size - 1

        const chunkSize = end - start + 1

        const stream = fs.createReadStream(file, {
            start,
            end
        })

        res.writeHead(206, {
            'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'audio/mpeg'
        })

        log(`Streaming file split into chunks of ${chunkSize}`)

        return stream.pipe(res)
    }

    /**
     * Helper method to given an error the HTTP Response
     * @param req HTTP Request
     * @param res HTTP Response
     * @param error Error object/message
     * @param statusCode HTTP Status code (default: 500)
     */
    private httpMusicError(
        req: Request,
        res: Response,
        error: any,
        statusCode = 500
    ) {
        res.statusCode = statusCode
        res.json({ error })
        return res.end()
    }

    // ---- Sockets ----------------------------------

    public onSocketJoin(socket: Socket): void {
        super.onSocketJoin(socket)

        log(`Socket joined: ${socket.id}`)

        socket.on('music:search', (data) => this.search(socket, data))
        socket.on('music:download', (data) => this.download(socket, data))

        socket.on('music:getMusic', (data) => this.getMusic(socket, data))

        socket.on('music:getPlaylists', () => this.getPlaylists(socket))
        socket.on('music:getPlaylistSongs', (data) =>
            this.getPlaylistSongs(socket, data)
        )

        socket.on('music:addToPlaylist', (data) =>
            this.addToPlaylist(socket, data)
        )
        socket.on('music:addToPlaylists', (data) =>
            this.addToPlaylists(socket, data)
        )
        socket.on('music:sortPlaylist', (data) =>
            this.sortPlaylist(socket, data)
        )

        socket.on('music:removeFromPlaylist', (data) =>
            this.removeFromPlaylist(socket, data)
        )
        socket.on('music:removePlaylist', (data) =>
            this.removePlaylist(socket, data)
        )
    }

    // ---- Tasks ------------------------------------

    protected registerTasks(): number[] {
        // Schedules
        const eachHours = '0 0 * * * *'

        // Registering
        const ids: number[] = [
            this.registerTask(() => this.checkOrphanMusics(), eachHours)
            // TODO: this.registerTask(() => this.checkOrphanMusics())
            // TODO: this.registerTask(() => this.checkNotStoredMusics())
        ]

        log(`Registered ${ids.length} tasks`)

        return ids
    }

    private checkOrphanMusics(): Promise<any> {
        return Music.checkOrphan()
            .then((musics) =>
                log(`${musics.length} orphan musics removed from the Database`)
            )
            .catch((err) => log(`Unable to remove orphan musics: ${err}`))
    }

    // ---- Methods ----------------------------------

    /**
     * Get the Music entry from the source and sourceId and send it to the Client
     * @param socket Client Socket
     * @param data Data containing the source and sourceId of the music
     */
    private getMusic(socket: Socket, data: any): any {
        const { source, sourceId } = data

        if (
            !source ||
            !sourceId ||
            !(typeof source === 'string') ||
            !(typeof sourceId === 'string')
        ) {
            return socket.emit('music:error', 'Invalid fields')
        }

        log(`Getting info of ${sourceId} from source ${source}`)

        Music.findOneSong(source, sourceId)
            .then((music) => {
                log(`Got info, responding with music:musicEntry`)
                socket.emit('music:musicEntry', music.toJSON())
            })
            .catch((err) => socket.emit('music:error', err))
    }

    /**
     * Get all the playlists in the database and send them to the client
     * @param socket Client Socket
     */
    private getPlaylists(socket: Socket): void {
        log(`Getting all playlists`)

        Playlist.find()
            .then((playlists) => {
                log(
                    `Got playlists (${playlists.length}), responding with music:playlists`
                )
                socket.emit(
                    'music:playlists',
                    playlists.map((playlist) => playlist.toJSON())
                )
            })
            .catch((err) => socket.emit('music:error', err))
    }

    /**
     * Get all the songs of a playlist and send them to the client
     * @param socket Client Socket
     * @param data Data containing Playlist id
     */
    private getPlaylistSongs(socket: Socket, data: any): any {
        const { id } = data

        if (!id || !(typeof id === 'string')) {
            return socket.emit('music:error', 'Invalid fields')
        }

        log(`Getting playlist song from ${id}`)

        Playlist.findById(id).then((playlist) => {
            Promise.all(playlist.songs.map((song) => Music.findById(song.id)))
                .then((songs) => {
                    log(
                        `Got ${songs.length} songs, responding with music:PlaylistSongs`
                    )
                    return socket.emit('music:playlistSongs', {
                        playlist: playlist.toJSON(),
                        songs: songs.map((song) => song.toJSON())
                    })
                })
                .catch((err) => socket.emit('music:error', err))
        })
    }

    /**
     * Add a song into a playlist and send a report to the client
     * @param socket Client Socket
     * @param data Data containing Playlist name and Music id
     */
    private addToPlaylist(socket: Socket, data: any): any {
        const { id, playlist } = data

        if (
            !id ||
            !playlist ||
            !(typeof id === 'string') ||
            !(typeof playlist === 'string')
        ) {
            return socket.emit('music:error', 'Invalid fields')
        }

        log(`Received addToPlaylist event from ${socket.id}`)

        Music.findById(id)
            .then((music) =>
                Promise.all([music.addToPlaylist(playlist), music])
            )
            .then(([playlist, music]) => {
                log(`Added ${music.id} song to playlist ${playlist.name}`)

                socket.emit('music:addedToPlaylist', {
                    playlist: playlist.toJSON(),
                    music: music.toJSON()
                })
            })
            .catch((err) => socket.emit('music:error', err))
    }

    /**
     * Add a song into some playlists and send a report to the client
     * @param socket Client Socket
     * @param data Data containing Playlist names and Music id
     */
    private addToPlaylists(socket: Socket, data: any): any {
        const { id, playlists } = data

        if (!id || !(typeof id === 'string')) {
            return socket.emit('music:error', 'Invalid fields')
        }

        log(`Received addToPlaylists event from ${socket.id}`)

        Music.findById(id)
            .then((music) =>
                Promise.all([music.addToPlaylists(playlists), music])
            )
            .then(([playlists, music]) => {
                log(`Added song ${music.id} to ${playlists.length} playlists`)
                socket.emit('music:addedToPlaylists', {
                    playlists: playlists.map((playlist) => playlist.toJSON()),
                    music: music.toJSON()
                })
            })
            .catch((err) => socket.emit('music:error', err))
    }

    /**
     * Get a playlist by it's name with the songs sorted by the wanted method and send them to the client
     * @param socket Client Socket
     * @param data Data containing the Playlist name and the sort method
     */
    private sortPlaylist(socket: Socket, data: any): any {
        const { name, sort } = data

        if (
            !name ||
            !sort ||
            !(typeof name === 'string') ||
            !(typeof sort === 'string')
        )
            return socket.emit('music:error', 'Invalid fields')

        log(`Received sort by ${sort} event from ${socket.id}`)

        // rearrange playlist.songs[] for play cue
        Playlist.findOne({ name: name })
            .then((playlist) => {
                if (sort == 'name') {
                    // sort by name
                    playlist.songs.sort((a, b) =>
                        a.title.localeCompare(b.title)
                    )

                    socket.emit('music:sortedByName', playlist)
                } else if (sort == 'addingDate') {
                    // sort by date (compare numbers with getTime())
                    playlist.songs.sort(
                        (a, b) =>
                            a.addingDate.getTime() - b.addingDate.getTime()
                    )

                    socket.emit('music:sortedByAddingDate', playlist)
                } else if (sort == 'random') {
                    // shuffling the list for random order
                    for (let i = 0; i < 5; i++) {
                        playlist.songs.sort(() => 0.5 - Math.random())
                    }

                    socket.emit('music:shuffled', playlist)
                }

                // return the unsorted playlist if no order specified ('' or anything else)
                socket.emit('music:unsorted', playlist)
            })
            .catch((err) => socket.emit('music:error', err))
    }

    /**
     * Remove a music from a playlist songs and send back client info
     * @param socket Client Socket
     * @param data Data containing the id of the music and the playlist name
     */
    private removeFromPlaylist(socket: Socket, data: any): any {
        const { id, playlist } = data

        if (
            !id ||
            !playlist ||
            !(typeof id === 'string') ||
            !(typeof playlist === 'string')
        ) {
            return socket.emit('music:error', 'Invalid fields')
        }

        Playlist.getOrCreate(playlist)
            .then((playlist) =>
                Promise.all([playlist, playlist.removeSong(id)])
            )
            .then(([playlist, music]) => {
                log(`Removed music ${music.id} from playlist ${playlist.name}`)

                socket.emit('music:removedFromPlaylist', {
                    playlist: playlist.toJSON(),
                    music: music.toJSON()
                })
            })
            .catch((err) => socket.emit('music:error', err))
    }

    /**
     * Remove a playlist and send back data to the client
     * @param socket Client Socket
     * @param data Data containing the playlist name
     */
    private removePlaylist(socket: Socket, data: any): any {
        const { playlist } = data

        if (!playlist || !(typeof playlist === 'string')) {
            return socket.emit('music:error', 'Invalid fields')
        }

        Playlist.getOrCreate(playlist)
            .then((playlist) => playlist.remove())
            .then((playlist) => {
                log(`Removed playlist: ${playlist.name}`)
                socket.emit('music:removedPlaylist', playlist.toJSON())
            })
            .catch((err) => socket.emit('music:error', err))
    }

    // ---- Methods: Search --------------------------

    /**
     * Search for a music/video
     * @param socket Client Socket
     * @param data Provided data
     */
    private search(socket: Socket, data: any): any {
        log(`Received search event from ${socket.id}`)

        const { query, source } = data
        const limit: number = data.limit && data.limit < 5 ? data.limit : 5

        // Check for fields
        if (!query || !source) {
            socket.emit('music:error', 'Invalid fields')
            return false
        }

        // Init
        let search: Promise<SearchResult[]> = Promise.resolve([])

        // Youtube case
        if (source.toLowerCase() === 'youtube')
            search = this.searchYoutube(query, limit)

        // Continue
        search
            .then((results) => {
                log(
                    `Got ${results.length} results, sending music:searchResult event`
                )
                socket.emit('music:searchResult', results)
            })
            .catch((err) => socket.emit('music:error', err))
    }

    // ---- Search Youtube ---------------------------

    /**
     * Search for video on Youtube
     * @param query Search query
     * @param limit Result limit
     * @return A Promise of SearchResult Array
     */
    private searchYoutube(
        query: string,
        limit: number
    ): Promise<SearchResult[]> {
        log(`Searching on youtube for "${query}"`)

        return this.youtube.searchVideos(query, limit).then((videos) => {
            const { results } = videos
            const urls = results.map((result) => result.url)

            log(`Found ${urls.length} results for "${query}"`)

            return Promise.all(urls.map((url) => this.fetchYoutubeInfo(url)))
        })
    }

    /**
     * Fetch Youtube data from a Youtube Video url using YoutubeDL
     * @param url URL of the Youtube Video
     * @return A Promise of SearchResult
     */
    private fetchYoutubeInfo(url: string): Promise<SearchResult> {
        log(`Resolving info for ${url}`)
        return new Promise((resolve, reject) => {
            youtubedl.getInfo(url, function (err, info) {
                if (err) {
                    log(`Something went wrong while resolving ${url}`)
                    return reject(err)
                }

                log(`Resolved for ${url}`)

                return resolve(
                    Music.doesExist('youtube', info.id).then((inDatabase) => {
                        return {
                            id: info.id,
                            title: info.title,
                            url,
                            duration: info._duration_raw,
                            thumbnail: info.thumbnails[0].url,
                            source: 'youtube',
                            inDatabase
                        }
                    })
                )
            })
        })
    }

    // ---- Methods: Download ------------------------

    private download(socket: Socket, data: any): any {
        log(`Received download event from ${socket.id}`)

        const { url, source } = data

        // Check for fields
        if (!url || !source) {
            socket.emit('music:error', 'Invalid fields')
            return false
        }

        // Init
        let music: Promise<void | DownloadedMusic> = Promise.resolve()

        // Youtube case
        if (source.toLowerCase() === 'youtube')
            music = this.downloadYoutube(socket, url).then((video) =>
                this.convertVideo(socket, video, 'youtube-')
            )

        // Continue
        music
            // Check for data type from music Promise
            .then((data) => {
                if (data) return Promise.resolve(data as DownloadedMusic)
                return Promise.reject('Invalid source')
            })
            // Create an entry in the database
            .then((audio) => {
                return Music.fromDownloaded(audio)
            })
            // Send it
            .then((music) => {
                log(`Music entry created, emitting music:music`)
                socket.emit('music:music', music)
            })
            // Emit error on error
            .catch((err) => socket.emit('music:error', err))
    }

    // ---- Youtube Download -------------------------

    /**
     * Download a video from youtube into the youtube storage
     * @param socket Client Socket to send download status
     * @param url URL of the video to download
     * @returns A Promise of the DownloadedVideo data (id, title, storage, ...)
     */
    private downloadYoutube(
        socket: Socket,
        url: string
    ): Promise<DownloadedVideo> {
        log(`Downloading ${url} video from youtube`)

        return new Promise((resolve, reject) => {
            // Initialize empty DownloadedVideo object
            const video: DownloadedVideo = dummyDownloadedVideo()
            video.url = url
            video.source = 'youtube'

            // Download status for the client
            const download: YoutubeDownloadStatus = {
                video,
                status: { current: 0, total: 0, progress: 0 }
            }

            // Used for logging
            let lastCheck = -1

            try {
                // Start youtubedl for the url, just go for audio
                const dl = youtubedl(url, ['-f', 'bestaudio'], {})

                // First event, fill info fields
                dl.on('info', (info: Info) => {
                    if (
                        !info ||
                        !info.thumbnails ||
                        info.thumbnails.length === 0
                    )
                        return reject('Bad URL')

                    video.id = info.id
                    video.title = info.title
                    video.thumbnail = info.thumbnails[0].url
                    video.duration = info._duration_raw
                    video.mp4.filename = `${info.id}.mp4`
                    video.mp4.filepath = path.join(
                        this.youtubeStorage,
                        video.mp4.filename
                    )
                    download.status.total = info.size

                    // Pipe output stream to the storage
                    dl.pipe(
                        fs.createWriteStream(video.mp4.filepath, {
                            encoding: 'utf-8'
                        })
                    )
                })

                // Show update on data
                dl.on('data', (chunk: Buffer) => {
                    download.status.current += chunk.length
                    download.status.progress =
                        download.status.current / download.status.total
                    const { progress } = download.status

                    // Log every 10%
                    if (progress * 10 > lastCheck) {
                        lastCheck = Math.ceil(progress * 10)
                        log(
                            `Download of "${video.id}"... ${Math.floor(
                                progress * 100
                            )}%`
                        )
                    }

                    socket.emit('music:downloading', download)
                })

                // Reject error
                dl.on('error', reject)

                // Resolve when it's downloaded
                dl.on('end', () => {
                    log(`Download of ${video.id} 100% - finished`)
                    return resolve(video)
                })
            } catch (err) {
                return reject(err)
            }
        })
    }

    // ---- Video converting -------------------------

    /**
     * Convert a fresh download video into an audio file in the musics storage
     * @param socket Client Socket to send converting status
     * @param video DownloadedVideo data
     * @param prefix Prefix to add to the converted audio file name (empty by default)
     * @returns A Promise of the DownloadedAudio data (id, title, storage, ...)
     */
    private convertVideo(
        socket: Socket,
        video: DownloadedVideo,
        prefix = ''
    ): Promise<DownloadedMusic> {
        log(`Converting video ${video.id}`)

        // Set data
        const filename = `${prefix}${video.mp4.filename.replace(
            '.mp4',
            '.mp3'
        )}`
        const filepath = path.join(this.mp3Storage, filename)

        // Create DownloadedMusic object
        const audio: DownloadedMusic = Object.assign(
            { mp3: { filename, filepath } },
            video
        )

        // Create ConversionStatus
        const conversion: ConversionStatus = {
            audio,
            video,
            status: { pending: true, done: false }
        }

        // Tell that we are beginning
        socket.emit('music:converting', conversion)

        // Let's do it
        return mp4ToMp3(video.mp4.filepath, audio.mp3.filepath).then(() => {
            // Update client conversion status
            conversion.status = { pending: false, done: true }
            socket.emit('music:converting', conversion)

            return audio
        })
    }

    // ---- Getters ----------------------------------

    get name(): string {
        // Module name is 'music'
        return 'music'
    }

    get waitForDatabase(): boolean {
        // We do need to wait for the database
        return true
    }
}
