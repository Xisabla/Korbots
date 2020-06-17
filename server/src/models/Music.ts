import { Document, Model, model, Schema } from 'mongoose'

import { DownloadedMusic } from '../core/IMusic'
import { IPlaylistSchema, Playlist } from './Playlist'

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
    /**  */
    title: string
    duration: number
    thumbnail: string
    sourceId: string
    source: string
    path: string

    /**
     *
     * @param playlist
     */
    addToPlaylist(playlist: string): Promise<IPlaylistSchema>
    /**
     *
     * @param playlist
     */
    addToPlaylists(playlist: string[]): Promise<IPlaylistSchema>
}

export interface IMusic extends Model<IMusicSchema> {
    /**
     * Create a Music Document from a DownloadedMusic
     * @param audio The DownloadedMusic
     * @returns A Music Document
     */
    fromDownloaded(audio: DownloadedMusic): IMusicSchema

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

    // ---- Actions ----------------------------------
    // TODO: For a Task: Check for all entries in the DB if the storage exists, remove the Music from the DB and playlists if
    //  the file doesn't exist
    // checkStorage(): Promise<any>
    // TODO: For a Task: Check for all entries if it belongs in a playlist, if not delete it and delete storage
    // checkOrphan(): Promise<any>
}

// ---- Methods : Music ---------------------

MusicSchema.methods.addToPlaylist = function (
    playlist: string
): Promise<IPlaylistSchema> {
    return Playlist.getOrCreate(playlist).then((playlist) => {
        if (!playlist.songs.find((song) => song.id === this.id)) {
            console.log('add')
            playlist.songs.push({
                id: this.id,
                addingDate: new Date()
            })

            return playlist.save().then(() => playlist)
        }

        console.log('skip')

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

// ---- Statics : Music ---------------------

MusicSchema.statics.fromDownloaded = function (
    audio: DownloadedMusic
): IMusicSchema {
    return new Music({
        title: audio.title,
        duration: audio.duration,
        thumbnail: audio.thumbnail,
        sourceId: audio.id,
        source: audio.source,
        path: `musics/${audio.mp3.filename}`
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

// ---- Models ------------------------------

export const Music = model<IMusicSchema, IMusic>('Music', MusicSchema)
