import debug from 'debug'
import fs from 'fs'
import path from 'path'
import { YouTube } from 'popyt'
import { Socket } from 'socket.io'
import youtubedl, { Info } from 'youtube-dl'

import Application from '../core/Application'
import Module from '../core/Module'

const log = debug('module:music')

export class MusicModule extends Module {
    private youtube: YouTube

    public register(app: Application): void {
        super.register(app)

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
        const limit: number = data.limit && data.limit < 10 ? data.limit : 5

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

    private download(socket: Socket, data: any) {
        const { url } = data

        // TODO: -#1- Check for valid data (name/title, url, source)
        // TODO: -#2- Use Model create an entry in DB when it's over
        // TODO: -#3- Use Promises for this and split code

        const dir = path.join(__dirname, '../', '../', 'storage', 'youtube')
        // TODO: Deal with mp3 or convert it (not working ATM)
        const dl = youtubedl(url, ['-x', '--audio-format', 'mp3'], {})

        let total = 0
        let current = 0
        let file: string

        // Start when fetch basic info
        dl.on('info', (info: Info) => {
            total = info.size
            const name = encodeURI(info._filename)

            file = path.join(dir, name)
            dl.pipe(fs.createWriteStream(file, { encoding: 'utf-8' }))
        })

        // Update status while getting data
        dl.on('data', (chunk: Buffer) => {
            current += chunk.length

            const ratio = current / total
            const percentage = ratio * 100

            socket.emit('music:downloading', {
                data,
                status: { current, total, percentage }
            })
        })

        // On over, tell the user it's over
        dl.on('end', () => {
            socket.emit('music:downloaded', { data, result: { file } })
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
