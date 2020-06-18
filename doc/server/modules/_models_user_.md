[korbots-server](../README.md) › ["models/User"](_models_user_.md)

# Module: "models/User"

## Index

### Interfaces

* [IUser](../interfaces/_models_user_.iuser.md)
* [IUserSchema](../interfaces/_models_user_.iuserschema.md)

### Variables

* [User](_models_user_.md#const-user)
* [UserSchema](_models_user_.md#const-userschema)

## Variables

### `Const` User

• **User**: *[IUser](../interfaces/_models_user_.iuser.md)‹›* = model<IUserSchema, IUser>('User', UserSchema)

*Defined in [src/models/User.ts:26](https://github.com/Xisabla/Korbots/blob/7261d8b/server/src/models/User.ts#L26)*

___

### `Const` UserSchema

• **UserSchema**: *Schema‹any›* = new Schema(
    {
        username: { type: String, required: true, unique: true },
        connected: Boolean,
        socketId: String
    },
    { collection: 'users-socket' }
)

*Defined in [src/models/User.ts:3](https://github.com/Xisabla/Korbots/blob/7261d8b/server/src/models/User.ts#L3)*
