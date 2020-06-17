import { Document, Model, model, Schema } from 'mongoose'

import { Music } from './Music'

// ---- Schema -----------------------------------

export const SongSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    addingDate: { type: Date, required: true }
})

export const PlaylistSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        duration: { type: Number, required: true, default: 0 },
        creationDate: { type: Date, required: true },
        songs: { type: [SongSchema], required: true }
    },
    { collection: 'playlist' }
)

export interface IPlaylistSchema extends Document {
    /** Name of the playlist */
    name: string
    /** Description of the playlist */
    description?: string
    /** Total duration of the playlist */
    duration: number
    /** Playlist creation date */
    creationDate: Date
    /** Songs of the playlist */
    songs: ISongSchema[]

    // ---- Methods ----------------------------------

    // TODO: compute the total duration of the playlist
    // computeDuration(): Promise<IPlaylistSchema>

    /**
     * Remove a song from the playlist
     * @param id The ID of the Music
     * @return A Promise of the Playlist
     */
    removeSong(id: string): Promise<IPlaylistSchema>
    /**
     * Remove a song from the playlist
     * @param source The source of the Music
     * @param sourceId The sourceId of the Music
     * @returns A Promise of the Playlist
     */
    removeSongSource(source: string, sourceId: string): Promise<IPlaylistSchema>
}

export interface ISongSchema extends Document {
    id: string
    title: string
    addingDate: Date
}

// ---- Model ------------------------------------

export interface IPlaylist extends Model<IPlaylistSchema> {
    // ---- Getters ----------------------------------

    /**
     * Get or create if doesn't exists a Playlist by it's name
     * @param name The name of the Playlist
     * @returns A Promise of the Playlist
     */
    getOrCreate(name: string): Promise<IPlaylistSchema>
}

// ---- Methods : Playlist ------------------

PlaylistSchema.methods.removeSong = function (
    id: string
): Promise<IPlaylistSchema> {
    const songs: ISongSchema[] = this.songs.filter(
        (song: ISongSchema) => song.id !== id
    )

    this.songs = songs

    return this.save()
}

PlaylistSchema.methods.removeSongSource = function (
    source: string,
    sourceId: string
): Promise<IPlaylistSchema> {
    return Music.findOneSong(source, sourceId).then((music) => {
        if (music) return this.removeSong(music.id)
    })
}

// ---- Statics : Playlist ------------------

PlaylistSchema.statics.getOrCreate = function (
    name: string
): Promise<IPlaylistSchema> {
    return Playlist.findOne({ name }).then((playlist) => {
        if (playlist) return playlist

        return new Playlist({
            name,
            duration: 0,
            creationDate: new Date(),
            songs: []
        }).save()
    })
}

export const Playlist = model<IPlaylistSchema, IPlaylist>(
    'Playist',
    PlaylistSchema
)
