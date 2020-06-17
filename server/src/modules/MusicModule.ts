import debug from 'debug'
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
import { mp4ToMp3 } from '../services/ffmpeg'

const log = debug('module:music')

export class MusicModule extends Module {
    private youtube: YouTube

    private mp3Storage: string
    private youtubeStorage: string

    public register(app: Application): void {
        super.register(app)

        this.youtubeStorage = app.getStorage('youtube')
        this.mp3Storage = app.getStorage('musics')

        this.youtube = new YouTube(Application.getAPIKey('google:youtube'))

        log('Registered')
    }

    // ---- Sockets ----------------------------------

    public onSocketJoin(socket: Socket): void {
        super.onSocketJoin(socket)

        log(`Socket joined: ${socket.id}`)

        socket.on('music:search', (data) => this.search(socket, data))
        socket.on('music:download', (data) => this.download(socket, data))
    }

    // ---- Tasks ------------------------------------

    protected registerTasks(): number[] {
        // Schedules

        // Registering
        const ids: number[] = []

        log(`Registered ${ids.length} tasks`)

        return ids
    }

    // ---- Methods ----------------------------------

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
    searchYoutube(query: string, limit: number): Promise<SearchResult[]> {
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
    fetchYoutubeInfo(url: string): Promise<SearchResult> {
        log(`Resolving info for ${url}`)
        return new Promise((resolve, reject) => {
            youtubedl.getInfo(url, function (err, info) {
                if (err) {
                    log(`Something went wrong while resolving ${url}`)
                    return reject(err)
                }

                log(`Resolved for ${url}`)
                return resolve({
                    id: info.id,
                    title: info.title,
                    url,
                    duration: info._duration_raw,
                    thumbnail: info.thumbnails[0].url,
                    source: 'youtube'
                })
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
            .then((data) => {
                if (data) return Promise.resolve(data as DownloadedMusic)
                return Promise.reject('Invalid source')
            })
            // TODO: Create music document from Music model and return it
            .then(console.log)
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
