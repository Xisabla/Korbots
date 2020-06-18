import { compareSync, hashSync } from 'bcryptjs'
import { Document, Model, model, Schema } from 'mongoose'
import { Socket } from 'socket.io'

// ---- Schema -----------------------------------

export const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
        type: String,
        required: true,
        default: 'https://i.imgur.com/anTmbGJ.png'
    },
    socketId: { type: String }
})

export interface IUserSchema extends Document {
    username: string
    password: string
    avatar: string
    socketId?: string

    setAvatar(url: string): Promise<IUserSchema>
    setSocket(socket: Socket): Promise<IUserSchema>
    logout(): Promise<IUserSchema>
}

// ---- Model ------------------------------------

export interface IUser extends Model<IUserSchema> {
    login(
        username: string,
        password: string,
        socket: Socket
    ): Promise<IUserSchema>
    logout(socketId: string): Promise<IUserSchema>
    register(username: string, password: string): Promise<IUserSchema>
}

// ---- Methods ----------------------------------

UserSchema.methods.setAvatar = function (url: string): Promise<IUserSchema> {
    this.avatar = url

    return this.save()
}

UserSchema.methods.setSocket = function (socket: Socket): Promise<IUserSchema> {
    this.socketId = socket.id

    return this.save()
}

UserSchema.methods.logout = function (): Promise<IUserSchema> {
    this.socketId = ''

    return this.save()
}

// ---- Statics ----------------------------------

UserSchema.statics.login = function (
    username: string,
    password: string,
    socket: Socket
): Promise<IUserSchema> {
    return User.findOne({ username }).then((user) => {
        if (user && compareSync(password, user.password)) {
            return user.setSocket(socket)
        }

        return Promise.reject('Invalid credentials')
    })
}

UserSchema.statics.logout = function (socketId: string): Promise<IUserSchema> {
    return User.findOne({ socketId }).then((user) => {
        return user.logout()
    })
}

UserSchema.statics.register = function (
    username: string,
    password: string
): Promise<IUserSchema> {
    const user = new User({
        username,
        password: hashSync(password)
    })

    return user.save()
}

export const User = model<IUserSchema, IUser>('User', UserSchema)

/*export const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        connected: Boolean,
        socketId: String
    },
    { collection: 'users-socket' }
)

export interface IUserSchema extends Document {
    username: string
    connected?: boolean
    socketId?: string
}

export interface IUser extends Model<IUserSchema> {
    doesExists(username: string): Promise<boolean>
}

UserSchema.statics.doesExists = function (username: string) {
    return User.findOne({ username }).then((user) => user != null)
}

export const User = model<IUserSchema, IUser>('User', UserSchema)*/
