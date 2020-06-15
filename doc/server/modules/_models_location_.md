[korbots-server](../README.md) › ["models/Location"](_models_location_.md)

# Module: "models/Location"

## Index

### Interfaces

* [Coordinates](../interfaces/_models_location_.coordinates.md)
* [ILocation](../interfaces/_models_location_.ilocation.md)
* [ILocationSchema](../interfaces/_models_location_.ilocationschema.md)

### Variables

* [Location](_models_location_.md#const-location)
* [LocationSchema](_models_location_.md#const-locationschema)

## Variables

### `Const` Location

• **Location**: *[ILocation](../interfaces/_models_location_.ilocation.md)‹›* = model<ILocationSchema, ILocation>(
    'Location',
    LocationSchema
)

*Defined in [src/models/Location.ts:99](https://github.com/Xisabla/Korbots/blob/23513ea/server/src/models/Location.ts#L99)*

___

### `Const` LocationSchema

• **LocationSchema**: *Schema‹any›* = new Schema(
    {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true }
    },
    { collection: 'location' }
)

*Defined in [src/models/Location.ts:16](https://github.com/Xisabla/Korbots/blob/23513ea/server/src/models/Location.ts#L16)*
