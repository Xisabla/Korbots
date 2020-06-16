import { Document, Model, model, Schema } from 'mongoose'

// MUSIC ----------------------------------------
export const MusicSchema = new Schema(
    {
        ytId: String,
        title: String,
        // duration: Number,
        // thumbnail: Image,
        source: String,
        path: String
    },
    { collection: 'music' }
)

export interface IMusicSchema extends Document {
    ytId: string
    title: string
    // duration : number
    // thumbnail: Image
    source: string
    path: string

    /** add its id to a playlist (create a new playlist if does not exit) */
    addToPlaylist(playlists: [string]): void // : Promise<IPlaylistSchema> ?
}

export interface IMusic extends Model<IMusicSchema> {
    /** Return the Music Doc from DB if exits or null object */
    findOneSong(id: string): Promise<IMusicSchema> // like a get
    /** Return true if song already ewist in database */
    doesExist(id: string): boolean
}

// PLAYLIST -------------------------------------
export const PlaylistSchema = new Schema(
    {
        id: String,
        name: String,
        // description: String,
        // duration: Number,
        creation: Date,
        songs: [
            {
                id: String,
                addingDate: Date
            }
        ] // [ {id, date}, {id, date}, ...]
    },
    { collection: 'playlist' }
)

export interface IPlaylistSchema extends Document {
    name: string
    // description?: string
    // duration: number
    creation: Date
    songs: [
        {
            ytId: string
            addingDate: Date
        }
    ]

    /** Remove song_id from song_list and song_doc from DB if song not in any other Playlist */
    removeSong(id: string): void
}

export interface IPlaylist extends Model<IPlaylistSchema> {
    /** Create new Playlist Doc with given name + return the new doc */
    createNew(name: string): Promise<IPlaylistSchema> // creation = new Date() && input not sure...
    /** True if the song is in any playlist */
    isInPlaylist(id: string): boolean
}

// ---- Methods : Music ---------------------

/** Add the music id to chosen Playlists, create new playlist if name does not exist (new input from user) */
MusicSchema.methods.addToPlaylists = function (playlists: [string]): void {
    for (let i = 0; i < playlists.length; i++) {
        Playlist.findOne({ name: playlists[i] }).then((doc) => {
            if (doc != null) {
                const now = new Date()
                doc.songs.push({
                    ytId: this.ytId,
                    addingDate: now
                })
            } else {
                Playlist.createNew(playlists[i]).then((doc) => {
                    const now = new Date()
                    doc.songs.push({
                        ytId: this.ytId,
                        addingDate: now
                    })
                })
            }
        })
    }
}

// ---- Statics : Music ---------------------

/** Return true if a song exists in database */
MusicSchema.statics.doesExist = function (id: string): boolean {
    return Music.findOneSong(id) != null
}

/** Find a document in the database from its id */
MusicSchema.statics.findOneSong = function (id: string): Promise<IMusicSchema> {
    return Music.findOne({ ytId: id }).then((doc) => doc)
}

// ---- Methods : Playlist ------------------

// ---- Statics : Playlist ------------------

/** Create a new Playlist Document with a given name */
PlaylistSchema.statics.createNew = function (
    name: string
): Promise<IPlaylistSchema> {
    const playlist = new Playlist({
        name: name,
        creation: new Date(),
        songs: []
    })
    return playlist.save()
}

/** Delete the song from playlist songs list and from database is it is not in any other playlist */
PlaylistSchema.statics.removeSong = function (id: string): void {
    // delete from songs list
    for (let i = 0; i < this.songs.length; i++) {
        if (this.songs[i].ytId == id) this.songs.splice(i, 1)
    }

    if (!Playlist.isInPlaylist(id)) {
        // delete from database
        Music.findOneAndDelete({ ytId: id }).catch((err) => console.error(err)) // to keep ?
    }
}

// ---- Models ------------------------------

export const Music = model<IMusicSchema, IMusic>('Music', MusicSchema)

export const Playlist = model<IPlaylistSchema, IPlaylist>(
    'Playist',
    PlaylistSchema
)
