// ---- Files ------------------------------------

/**
 * Global interface for a File
 */
export interface File {
    filename: string
    filepath: string
}

/**
 * Global interface of a Downloaded Music
 */
export interface DownloadedMusic {
    /** ID of the source (eg: youtube video id) */
    id: string
    /** Title of the music */
    title: string
    /** URL of the original music/video */
    url: string
    /** Thumbnail of the song */
    thumbnail: string
    /** Duration of the song */
    duration: number
    /** Source of the song */
    source: string
    /** Server storage information */
    mp3: File
}

/**
 * Global interface of a Downloaded Video
 */
export interface DownloadedVideo {
    /** ID of the source (eg: youtube video id) */
    id: string
    /** Title of the music */
    title: string
    /** URL of the original music/video */
    url: string
    /** Thumbnail of the song */
    thumbnail: string
    /** Duration of the song */
    duration: number
    /** Source of the song */
    source: string
    /** Server storage information */
    mp4: File
}

// ---- Search Results ---------------------------

/**
 * Result of a music search
 */
export interface SearchResult {
    /** ID of the source (eg: youtube video id) */
    id: string
    /** Title of the music */
    title: string
    /** URL of the original music/video */
    url: string
    /** Thumbnail of the song */
    thumbnail: string
    /** Duration of the song */
    duration: number
    /** Source of the song */
    source: string
    /** True if the music is already in the database */
    inDatabase: boolean
}

// ---- Converting -------------------------------

export interface ConversionStatus {
    audio: DownloadedMusic
    video: DownloadedVideo
    status: {
        pending: boolean
        done: boolean
    }
}

// ---- Youtube ----------------------------------

/**
 * Information about the current download status for a video from Youtube
 */
export interface YoutubeDownloadStatus {
    video: DownloadedVideo
    status: {
        /** Current downloaded size of the download media */
        current: number
        /** Total size of the download media */
        total: number
        /** Ratio between current and total [0-1] */
        progress: number
    }
}

// ---- Generate empty ---------------------------

export function dummyDownloadedVideo(): DownloadedVideo {
    return {
        id: '',
        title: '',
        url: '',
        thumbnail: '',
        duration: 0,
        source: 'youtube',
        mp4: {
            filename: '',
            filepath: ''
        }
    }
}
