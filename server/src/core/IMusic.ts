/**
 * Ok, all of this is pretty "draft", let's make it better another day :-)
 *
 * What we will need and what the purpose ?
 *
 * Purpose: Define all interfaces of transiting data between each part of the music (pre/post)processing
 * Wwn: We need to know exactly what goes next step and what is needed for the client socket and then let's build one interface by step
 */

// TODO: Add needed elements by the Model and post-process
export interface DownloadedMusic {
    mp4filename: string
    mp4filepath: string
    mp3filename: string
    mp3filepath: string
}

export interface YoutubeDownloadMusicInfo {
    url: string
    id: string
    title: string
    duration: number
}

export interface YoutubeDownloadStatus {
    current: number
    total: number
    progress: number
}

// TODO: Don't use YoutubeDownload but only DownloadedMusic
// Let's wait to see what we need to be used by the Model and the post process
export interface YoutubeDownload extends DownloadedMusic {
    basic: YoutubeDownloadMusicInfo
}
