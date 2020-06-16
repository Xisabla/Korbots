[korbots-server](../README.md) › ["core/API/IGeocoding"](../modules/_core_api_igeocoding_.md) › [MapquestGeocodingAPIResponse](_core_api_igeocoding_.mapquestgeocodingapiresponse.md)

# Interface: MapquestGeocodingAPIResponse

Content of the Response from a MapquestGeocondingAPI Request

## Hierarchy

* **MapquestGeocodingAPIResponse**

## Index

### Properties

* [info](_core_api_igeocoding_.mapquestgeocodingapiresponse.md#info)
* [options](_core_api_igeocoding_.mapquestgeocodingapiresponse.md#options)
* [results](_core_api_igeocoding_.mapquestgeocodingapiresponse.md#results)

## Properties

###  info

• **info**: *object*

*Defined in [src/core/API/IGeocoding.ts:5](https://github.com/Xisabla/Korbots/blob/74b797c/server/src/core/API/IGeocoding.ts#L5)*

#### Type declaration:

* **copyright**(): *object*

  * **imageAltText**: *string*

  * **imageUrl**: *string*

  * **text**: *string*

* **messages**: *string[]*

* **statuscode**: *number*

___

###  options

• **options**: *object*

*Defined in [src/core/API/IGeocoding.ts:14](https://github.com/Xisabla/Korbots/blob/74b797c/server/src/core/API/IGeocoding.ts#L14)*

#### Type declaration:

* **ignoreLatLngInput**: *boolean*

* **maxResults**: *number*

* **thumbMaps**: *boolean*

___

###  results

• **results**: *object*

*Defined in [src/core/API/IGeocoding.ts:19](https://github.com/Xisabla/Korbots/blob/74b797c/server/src/core/API/IGeocoding.ts#L19)*

#### Type declaration:

* \[ **index**: *number*\]: object

* **locations**(): *object*

* **providedLocation**(): *object*

  * **location**: *string*
