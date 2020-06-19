import { Document, Model, model, Schema } from 'mongoose'

import { DownloadedMusic } from '../core/IMusic'
import { IPlaylistSchema, Playlist, Song } from './Playlist'

// ---- Schema -----------------------------------

export const MusicSchema = new Schema(
    {
        title: { type: String, required: true },
        duration: { type: Number, required: true },
        thumbnail: { type: String, required: true },
        sourceId: { type: String, required: true },
        source: { type: String, required: true },
        path: { type: String, required: true }
    },
    { collection: 'music' }
)

export interface IMusicSchema extends Document {
    /** Title of the music */
    title: string
    /** Duration of the music */
    duration: number
    /** Thumbnail of the music */
    thumbnail: string
    /** ID of the Source of the music */
    sourceId: string
    /** Source of the music */
    source: string
    /** Path of the music in the internal storage */
    path: string

    /**
     * Add the music to a playlist
     * @param playlist
     * @returns A Promise of the playlist
     */
    addToPlaylist(playlist: string): Promise<IPlaylistSchema>
    /**
     * Add the music to several playlists
     * @param playlist
     * @returns A Promise of the playlists
     */
    addToPlaylists(playlist: string[]): Promise<IPlaylistSchema[]>

    /**
     * Get all parent playlists of the music
     * @returns A Promise of the playlists
     */
    getPlaylists(): Promise<IPlaylistSchema[]>

    /**
     * Check if the Music is at least in one playlist
     * @return A Promise: true if it has no playlist, false otherwise
     */
    isOrphan(): Promise<boolean>

    /**
     * Remove the Music from the DB and from all the playlists
     * @returns A Promise of the Music Schema (not in the DB anymore)
     */
    safeRemove(): Promise<IMusicSchema>
}

export interface IMusic extends Model<IMusicSchema> {
    /**
     * Create a Music Document from a DownloadedMusic
     * @param audio The DownloadedMusic
     * @returns A Music Document
     */
    fromDownloaded(audio: DownloadedMusic): Promise<IMusicSchema>

    // ---- Getters ----------------------------------
    /**
     * Get the Music Document for the given source and sourceId
     * @param source Name of the source (eg: Youtube)
     * @param sourceId ID the music from the source
     * @returns A Promise of the Music Document queried
     */
    findOneSong(source: string, sourceId: string): Promise<IMusicSchema>

    /**
     * Search if a Music exists in the DataBase from it's source and sourceId
     * @param source Name of the source (eg: Youtube)
     * @param sourceId ID of the music from the source
     * @returns A Promise of true if an entry exists, a Promise of false otherwise
     */
    doesExist(source: string, sourceId: string): Promise<boolean>

    /**
     * Find all orphans music (music without playlist)
     * @returns A Promise with the Array of all orphan musics
     */
    getOrphans(): Promise<IMusicSchema[]>
}

// ---- Methods : Music ---------------------

MusicSchema.methods.addToPlaylist = function (
    playlist: string
): Promise<IPlaylistSchema> {
    return Playlist.getOrCreate(playlist).then((playlist) => {
        if (!playlist.songs.find((song) => song.id === this.id)) {
            playlist.songs.push(
                new Song({
                    id: this.id,
                    title: this.title,
                    addingDate: new Date()
                })
            )

            return playlist
                .save()
                .then((playlist: IPlaylistSchema) => playlist.computeDuration())
        }

        return playlist
    })
}

MusicSchema.methods.addToPlaylists = function (
    playlists: string[]
): Promise<IPlaylistSchema[]> {
    return Promise.all(
        playlists.map((playlist) => this.addToPlaylist(playlist))
    )
}

MusicSchema.methods.getPlaylists = function (): Promise<IPlaylistSchema[]> {
    return Playlist.find().then((playlists) =>
        playlists.filter((playlist) => {
            return playlist.songs.find((song) => song.id === this.id)
                ? true
                : false
        })
    )
}

MusicSchema.methods.isOrphan = function (): Promise<boolean> {
    return this.getPlaylists().then(
        (playlists: IPlaylistSchema[]) => playlists.length < 1
    )
}

MusicSchema.methods.safeRemove = function (): Promise<IMusicSchema> {
    return this.getPlaylists()
        .then((playlists: IPlaylistSchema[]) => {
            return Promise.all(
                playlists.map((playlist) => playlist.removeSong(this.id))
            )
        })
        .then(() => this.remove())
}

// ---- Statics : Music ---------------------

MusicSchema.statics.fromDownloaded = function (
    audio: DownloadedMusic
): Promise<IMusicSchema> {
    return Music.findOneSong(audio.source, audio.id).then((doc) => {
        if (doc) {
            doc.title = audio.title
            doc.duration = audio.duration
            doc.thumbnail = audio.thumbnail
            doc.path = `musics/${audio.mp3.filename}`

            return doc.save()
        }

        const m = new Music({
            title: audio.title,
            duration: audio.duration,
            thumbnail: audio.thumbnail,
            sourceId: audio.id,
            source: audio.source,
            path: `musics/${audio.mp3.filename}`
        })

        return m.save()
    })
}

MusicSchema.statics.findOneSong = function (
    source: string,
    sourceId: string
): Promise<IMusicSchema> {
    return Music.findOne({ source, sourceId }).then((doc) => doc)
}

MusicSchema.statics.doesExist = function (
    source: string,
    sourceId: string
): Promise<boolean> {
    return Music.findOneSong(source, sourceId).then((doc) => doc !== null)
}

MusicSchema.statics.getOrphans = function (): Promise<IMusicSchema[]> {
    return Music.find().then((musics) => {
        return Promise.all(
            musics.map((music) => Promise.all([music, music.isOrphan()]))
        )
            .then((musics) => musics.filter((music) => music[1]))
            .then((musics) => musics.map((music) => music[0]))
    })
}

// ---- Models ------------------------------

export const Music = model<IMusicSchema, IMusic>('Music', MusicSchema)
