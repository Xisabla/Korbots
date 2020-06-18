import { spawn } from 'child_process'
import debug from 'debug'
import pathToFfmpeg from 'ffmpeg-static'

const log = debug('service:ffmpeg')

export function ffmpeg(args: string[] = []): Promise<void> {
    return new Promise((resolve, reject) => {
        log(`Calling ffmpeg child with args: ${args}`)
        const child = spawn(pathToFfmpeg, args)

        child.on('close', (status) => {
            if (status == 0) return resolve()
            return reject()
        })
    })
}

export function mp4ToMp3(input: string, output: string): Promise<string> {
    const args: string[] = [
        '-i', // --input
        input, // input file
        '-y', // over// force format mp3write output files
        '-f',
        'mp3',
        '-ab', // set audio bitrate to 192000
        '192000',
        '-vn', // disable video
        output // output file
    ]

    log(`Converting ${input} to ${output}...`)

    return ffmpeg(args).then(() => {
        log('Done')
        return output
    })
}
