# Socket.IO Events

## [Weather Module](server/classes/_modules_weathermodule_.weathermodule.md)

| Event Name           | Flow direction  | Description                                                                         | Content                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------|
| weather:getCurrent   | client → server | Ask for the server to get the Current weather information                           | { latitude, longitude }                                |
| weather:getDaily    | client → server | Ask for the server to get the Daily weather information for a given day             | { latitude, longitude, date }                          |
| weather:getDailyAll | client → server | Ask for the server to get the Daily weather information for multiple days           | { latitude, longitude, further }                       |
| weather:getAll     | client → server | Ask for the server to get the Current and Daily (multiple days) weather information | { latitude, longitude, date }                          |
| weather:currentData  | server → client | Give to the client the Current weather information                                  | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)                                         |
| weather:dailyData    | server → client | Give to the client the Daily weather information for a specific date                | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)                                         |
| weather:dailyAllData | server → client | Give to the client some Daily weather information for multiple days                 | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[]                                       |
| weather:allData      | server → client | Give to the client the Current and multiple Daily weather information               | { current: [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[], daily: [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[] } |
| weather:autoUpdateCurrent | server → client | Give to the client all the Current entries updated                             | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[], |
| weather:error        | server → client | Tell to the client that something went wrong                                        | any                                                   |

## [Music Module](server/classes/_modules_musicmodule_.musicmodule.md)

### Music

| Event Name           | Flow direction  | Description                                                                         | Content                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------|
| music:search         | client → server | Ask for the server to search a song from a given source                             | { query, source }                                |
| music:getMusic       | client → server | Get a Music entry in the database from its source and sourceId                      | { source, sourceId }                          |
| music:download       | client → server | Ask for the server to download a song from a given source                           | { url, source }                          |
| music:searchResult   | server → client | Give to the client the results of song search                                       | [SearchResult](server/interfaces/_core_imusic_.searchresult.md) |
| music:downloading | server → client | Give to the client the status of a Video or an Audio download                          | [YoutubeDownloadStatus](server/interfaces/_core_imusic_.youtubedownloadstatus.md) |
| music:converting      | server → client | Give to the client the status of Video to Audio conversion                         | [ConversionStatus](server/interface/../interfaces/_core_imusic_.conversionstatus.md) |
| music:music          | server → client | Give to the client the Music entry                                                  | [IMusicSchema](server/interfaces/_models_music_.imusicschema.md) |
| music:musicEntry     | server → client | Save as above but specific for a "getMusic"                                         | [IMusicSchema](server/interfaces/_models_music_.imusicschema.md) |
| music:error          | server → client | Tell to the client that something went wrong                                        | any                                                   |

### Playlist

| Event Name           | Flow direction  | Description                                                                         | Content                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------|
| music:getPlaylists   | client → server | Get all playlists in the Database with basic song infos                             | { }                                |
| music:getPlaylistSongs| client → server | Get all songs from a Playlist (from its id)                                        | { id }                          |
| music:addToPlaylist  | client → server | Add a Music (from its id) to a Playlist (from its name)                             | { id, playlist }                          |
| music:addToPlaylists | client → server | Add a Music (from its id) to multiple Playlists (from their name)                   | { id, playlists[] }                          |
| music:removeFromPlaylist| client → server | Remove a Music (from its id) to a Playlist (from its name)                       | { id, playlist }                          |
| music:removePlaylist | client → server | Remove a Playlist from its name                                                     | { playlist }                          |
| music:sortPlaylist   | client → server | Get a sorted playlist from its name                                                 | { name, sort: 'name','addingDate','random','unsorted'  }                          |
| music:playlists      | server → client | Give to the client all the playlists in the database                                | [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md)[] |
| music:playlistSongs  | server → client | Give to the client all the songs of a playlist                                      | { playlist: [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md), songs: [IMusicSchema](server/interfaces/_models_music_.imusicschema.md)[] } |
| music:addedToPlaylist| server → client | Give to the client the song added and the playlist                                  | { playlist: [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md), music: [IMusicSchema](server/interfaces/_models_music_.imusicschema.md) } |
| music:addedToPlaylists| server → client | Give to the client the song added and the playlists                               | { playlists: [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md)[], music: [IMusicSchema](server/interfaces/_models_music_.imusicschema.md) } |
| music:removeFromPlaylist| server → client | Give to the client the song removed and the playlist                                  | { playlist: [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md), music: [IMusicSchema](server/interfaces/_models_music_.imusicschema.md) } |
| music:removedPlaylist| server → client | Give to the client the removed playlist                                            | [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md) |
| music:sortedByAddingDate| server → client | Give to the client a sorted by adding date playlist                             | [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md)   |
| music:shuffled      | server → client | Give to the client a shuffled playlist                                              | [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md)   |
| music:unsorted      | server → client | Give to the client an unsorted playlist                                             | [IPlaylistSchema](server/interfaces/_models_playlist_.iplaylistschema.md)   |
