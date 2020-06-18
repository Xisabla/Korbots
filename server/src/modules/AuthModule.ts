import debug from 'debug'
import { Socket } from 'socket.io'

import Application from '../core/Application'
import Module from '../core/Module'
import { User } from '../models/User'

const log = debug('module:auth')

export class AuthModule extends Module {
    public register(app: Application): void {
        super.register(app)

        /* app.server.use(
            session({
                secret:
                    process.env.SESSION_SECRET ||
                    Math.random().toString().substr(2),
                resave: true,
                saveUninitialized: true
            })
        )

        app.server.use(bodyParser.urlencoded({ extended: true }))
        app.server.use(bodyParser.json())

        app.server.get('/logout', (req, res) => {
            const session = req.session

            session.connected = false

            return res.redirect('/')
        })

        app.server.get('/authWrong', (req, res) => {
            return res.sendFile(path.join(app.public, 'wrong_login.html'))
        })

        app.server.post('/auth', (req, res) => {
            const { username, password } = req.body
            const session = req.session

            User.login(username, password)
                .then((user) => {
                    session.connected = true
                    session.username = user.username

                    return res.redirect('/')
                })
                .catch(() => res.redirect('/authWrong'))
        })

        app.server.use((req, res, next) => {
            if (req.url.split('/')[1].toLowerCase() === 'music') {
                log(`Let pass through public url /music/*`)
                return next()
            }

            const session = req.session
            const authPage = path.join(app.public, 'login.html')

            if (session.connected) {
                // link/check sessionId
                console.log(session.username)
            } else {
                return res.sendFile(authPage)
            }

            return next()
        }) */

        log('Registered')
    }

    // ---- Sockets ----------------------------------

    public onSocketJoin(socket: Socket): void {
        super.onSocketJoin(socket)

        log(`Socket joined: ${socket.id}`)

        socket.on('auth:login', (data) => {
            const { username, password } = data

            User.login(username, password, socket)
                .then((user) => socket.emit('auth:logged', user))
                .catch((err) => socket.emit('auth:error', err))
        })

        socket.on('auth:logout', () => {
            User.logout(socket.id)
                .then(() => {
                    socket.emit('auth:logout', true)
                })
                .catch((err) => {
                    socket.emit('auth:error', err)
                })
        })
    }

    // ---- Tasks ------------------------------------

    protected registerTasks(): number[] {
        // Registering
        const ids: number[] = []

        log(`Registered ${ids.length} tasks`)

        return ids
    }

    // ---- Getters ----------------------------------

    get name(): string {
        return 'auth'
    }

    get waitForDatabase(): boolean {
        return true
    }
}
