import { Document, Model, model, Schema } from 'mongoose'

export const UserSchema = new Schema(
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

export const User = model<IUserSchema, IUser>('User', UserSchema)
