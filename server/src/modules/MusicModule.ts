import debug from 'debug'
import fs from 'fs'
import path from 'path'
import { YouTube } from 'popyt'
import { Socket } from 'socket.io'
import youtubedl, { Info } from 'youtube-dl'

import Application from '../core/Application'
import {
    YoutubeDownload,
    YoutubeDownloadMusicInfo,
    YoutubeDownloadStatus
} from '../core/IMusic'
import Module from '../core/Module'
import { mp4ToMp3 } from '../services/ffmpeg'

const log = debug('module:music')

export class MusicModule extends Module {
    private youtube: YouTube

    private mp3Storage: string
    private ytStorage: string

    public register(app: Application): void {
        super.register(app)

        this.ytStorage = app.getStorage('youtube')
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

    private search(socket: Socket, data: any): void {
        const { query } = data
        const limit: number = data.limit && data.limit < 5 ? data.limit : 5

        // TODO: Maybe use Youtube-dl here to save API calls
        // TODO: Make real interfaces for the result

        this.youtube
            .searchVideos(query, limit)
            .then((videos) => {
                const { results } = videos
                const searchResults = results.map((result) => ({
                    id: result.id,
                    title: result.title,
                    thumbnails: result.thumbnails.default,
                    url: result.url
                }))

                socket.emit('music:searchResult', searchResults)
            })
            .catch((err) => socket.emit('music:error', err))
    }

    // ---- Methods: Downloading ---------------------

    private download(socket: Socket, data: any): any {
        log(`Received download event from ${socket.id}`)

        const { url, source } = data

        if (!url || !source) {
            socket.emit('music:error', 'Invalid fields')
            return false
        }

        if (source.toLowerCase() === 'youtube')
            this.downloadYoutube(socket, url)
                // TODO: Put the post-processing actions into a "youtubePostProcess" method
                .then((music) => {
                    log(
                        `Download of "${music.basic.id}" completed, post-processing...`
                    )
                    socket.emit('music:converting', {
                        music: music.basic,
                        status: 'pending'
                    })

                    return mp4ToMp3(music.mp4filepath, music.mp3filepath).then(
                        () => music
                    )
                })
                .then((music) => {
                    log(
                        `Post processing done, output file: ${music.mp3filepath}`
                    )
                    socket.emit('music:converting', {
                        music: music.basic,
                        status: 'done'
                    })

                    return music
                    // TODO: Create a new music model and return it
                })
                .catch((err) => socket.emit('music:error', err))
    }

    // ---- Youtube Download -------------------------

    /**
     * Download a youtube video from the url
     * @param socket The asking socket to transmit info
     * @param url The url of the video
     * @return A Promise of the video information (downloaded path, duration, title, ...)
     */
    private downloadYoutube(
        socket: Socket,
        url: string
    ): Promise<YoutubeDownload> {
        log(`Downloading "${url}" from youtube, fetching info...`)

        // Use Promise to make the post-process easier
        return new Promise((resolve, reject) => {
            try {
                // Init basic data
                let outputStream: fs.WriteStream

                const music: YoutubeDownloadMusicInfo = {
                    id: '',
                    title: '',
                    url,
                    duration: 0
                }

                const status: YoutubeDownloadStatus = {
                    current: 0,
                    total: 0,
                    progress: 0
                }

                const dlinfo: YoutubeDownload = {
                    basic: music,
                    mp4filename: '',
                    mp4filepath: '',
                    mp3filename: '',
                    mp3filepath: ''
                }

                let lastCheck = -1

                // Start youtubedl
                const dl = youtubedl(url, ['-f', 'bestaudio'], {})

                // Get basic info and pipe the output stream
                dl.on('info', (info: Info) => {
                    log(`Infos fetched for ${url}`)

                    // Update data
                    status.total = info.size
                    music.id = info.id
                    music.title = info.title
                    music.duration = info._duration_raw
                    dlinfo.mp4filename = `${music.id}.mp4`
                    dlinfo.mp4filepath = path.join(
                        this.ytStorage,
                        dlinfo.mp4filename
                    )
                    dlinfo.mp3filename = `yt-${music.id}.mp3`
                    dlinfo.mp3filepath = path.join(
                        this.mp3Storage,
                        dlinfo.mp3filename
                    )

                    outputStream = fs.createWriteStream(dlinfo.mp4filepath, {
                        encoding: 'utf-8'
                    })

                    // Pipe stream
                    dl.pipe(outputStream)
                })

                // Send client update on data event
                dl.on('data', (chunk: Buffer) => {
                    status.current += chunk.length
                    status.progress = status.current / status.total

                    // Log every 10%
                    if (status.progress * 10 > lastCheck) {
                        lastCheck = Math.ceil(status.progress * 10)
                        log(
                            `Download of "${music.id}"... ${Math.floor(
                                status.progress * 100
                            )}%`
                        )
                    }

                    socket.emit('music:downloading', {
                        music,
                        status
                    })
                })

                // On end, resolve the Promise, let's continue with the post-process
                dl.on('end', () => {
                    log(`Download of "${music.id}" 100%`)
                    resolve(dlinfo)
                })
                // Reject on caught error
            } catch (err) {
                reject(err)
            }
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
