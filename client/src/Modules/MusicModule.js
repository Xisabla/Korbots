import './MusicModule.scss'

import PropTypes from 'prop-types'
import React from 'react'

function formatDate(seconds) {
    let hours = 0,
        minutes = 0
    if (seconds >= 3600) hours = (seconds - (seconds % 3600)) / 3600
    seconds -= hours * 3600
    if (seconds >= 60) minutes = (seconds - (seconds % 60)) / 60
    seconds -= minutes * 60
    return `${hours ? (hours > 9 ? hours : '0' + hours) + ':' : ''}${
        minutes ? (minutes > 9 ? minutes : '0' + minutes) + ':' : '00:'
    }${seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00'}`
}
class MusicModule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ref: React.createRef(),
            searchResultsRef: React.createRef(),
            playlistsRef: React.createRef(),
            playlistRef: React.createRef(),
            progressRef: React.createRef(),
            audioRef: React.createRef(),
            index: props.index,
            onMouseDown: props.onMouseDown,
            onMouseUp: props.onMouseUp,
            onload: props.onload,
            query: '',
            currentSrc: '',
            currentProgress: -1,
            inPlaylist: false,
            searchResults: [
                /*{
                    title:
                        '[TEST] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                    duration: 3673,
                    thumbnail:
                        'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                }*/
            ],
            playlists: [],
            currentPlaylist: { playlist: [] },
            addingToPlaylist: -1,
            style: {
                width: '500px',
                height: '450px',
                paddingBottom: '0%',
                minWidth: '450px',
                minHeight: '400px',
                maxWidth: '840px',
                maxHeight: '560px',
                left: '0px',
                top: '0px'
            }
        }

        this.props.socket.on('music:error', (data) => {
            console.log('Error:', data)
        })

        this.props.socket.on('music:searchResult', (result) => {
            this.setState(() => ({ searchResults: result }))
        })
        this.props.socket.on('music:downloading', (result) => {
            this.setProgress(result.status.progress)
            this.setState(() => ({ currentProgress: result.status.progress }))
        })
        this.props.socket.on('music:music', (result) => {
            this.setProgress(0)
            if (this.state.addingToPlaylist === -1)
                this.setState(() => ({
                    currentProgress: -1,
                    currentSrc: window.location.origin + '/music/' + result._id
                }))
            else {
                this.props.socket.emit('music:getMusic', {
                    source: 'youtube',
                    sourceId: result.sourceId
                })
                this.setState(() => ({
                    currentProgress: -1
                }))
            }
        })

        this.props.socket.on('music:playlistSongs', (data) => {
            const { playlists, currentPlaylist, inPlaylist } = this.state
            for (let i = 0; i < playlists.length; i++) {
                if (playlists[i].title === data.playlist.name) {
                    for (let j = 0; j < data.songs.length; j++) {
                        playlists[i].playlist[j] = data.songs[j]
                        playlists[i].duration = data.playlist.duration
                    }
                    break
                }
            }
            let j = -1
            for (let i = 0; i < playlists.length; i++) {
                if (playlists[i].title === currentPlaylist.title) {
                    j = i
                    break
                }
            }
            if (j !== -1 && inPlaylist) {
                this.setState(() => ({ currentPlaylist: playlists[j] }))
            }
            this.setState(() => ({
                playlists: playlists
            }))
        })

        this.props.socket.on('music:playlists', (data) => {
            let playlists = []
            for (let i = 0; i < data.length; i++) {
                let playlist = []
                for (let j = 0; j < data[i].songs.length; j++) {
                    playlist.push({
                        id: data[i].songs[j].id,
                        title: data[i].songs[j].title
                    })
                }
                playlists.push({
                    title: data[i].name,
                    id: data[i]._id,
                    duration: 0,
                    playlist: playlist
                })
            }
            this.setState(() => ({ playlists: playlists }))
            for (let i = 0; i < playlists.length; i++) {
                this.props.socket.emit('music:getPlaylistSongs', {
                    id: playlists[i].id
                })
            }
        })

        this.props.socket.on('music:musicEntry', (data) => {
            const { playlists } = this.state
            if (this.state.addingToPlaylist !== -1) {
                if (typeof this.state.addingToPlaylist !== 'string')
                    this.props.socket.emit('music:addToPlaylist', {
                        id: data._id,
                        playlist: playlists[this.state.addingToPlaylist].title
                    })
                else
                    this.props.socket.emit('music:addToPlaylist', {
                        id: data._id,
                        playlist: this.state.addingToPlaylist
                    })
                this.setState(() => ({ addingToPlaylist: -1 }))
            } else {
                this.setState(() => ({
                    currentSrc: window.location.origin + '/music/' + data._id
                }))
            }
        })

        this.props.socket.on('music:addedToPlaylist', (data) => {
            if (data) this.props.socket.emit('music:getPlaylists')
        })

        this.props.socket.on('music:removedPlaylist', (data) => {
            const { currentPlaylist } = this.state
            if (data.name === currentPlaylist)
                this.setState(() => ({ currentPlaylist: { playlist: [] } }))
            if (data) this.props.socket.emit('music:getPlaylists')
        })
        this.props.socket.on('music:removedFromPlaylist', (data) => {
            if (data) {
                this.props.socket.emit('music:getPlaylists')
            }
        })

        this.props.socket.emit('music:getPlaylists')
        this.handleChangeQuery = this.handleChangeQuery.bind(this)
        this.getResults = this.getResults.bind(this)
    }

    nextSong = () => {
        const { currentPlaylist, currentSrc } = this.state
        for (let i = 0; i < currentPlaylist.playlist.length; i++) {
            if (
                window.location.origin +
                    '/music/' +
                    currentPlaylist.playlist[i]._id ===
                currentSrc
            ) {
                i++
                if (i >= currentPlaylist.playlist.length) i = 0
                this.setState(() => ({
                    currentSrc:
                        window.location.origin +
                        '/music/' +
                        currentPlaylist.playlist[i]._id
                }))
                break
            }
        }
    }

    setProgress(percent) {
        const { progressRef } = this.state
        const offset = 18 * 2 * Math.PI - percent * 18 * 2 * Math.PI
        progressRef.current.style.strokeDashoffset = offset
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    playlistTargetClick = () => {
        const { searchResultsRef, playlistsRef, playlistRef } = this.state
        if (playlistsRef.current.style.display !== 'flex') {
            playlistsRef.current.style.display = 'flex'
            searchResultsRef.current.style.display = 'none'
            playlistRef.current.style.display = 'none'
        } else {
            playlistsRef.current.style.display = 'none'
            searchResultsRef.current.style.display = 'flex'
            playlistRef.current.style.display = 'none'
        }
        this.setState(() => ({ inPlaylist: false }))
    }

    handlePlaylistClick = (ev, index) => {
        const {
            searchResultsRef,
            playlistsRef,
            playlistRef,
            playlists
        } = this.state
        if (ev && ev.target.className.includes('removePlaylistTarget')) {
            this.props.socket.emit('music:removePlaylist', {
                playlist: playlists[index].title
            })
            return
        }
        searchResultsRef.current.style.display = 'none'
        playlistsRef.current.style.display = 'none'
        playlistRef.current.style.display = 'flex'
        this.setState(() => ({
            currentPlaylist: playlists[index],
            inPlaylist: true
        }))
    }

    handlePlaylistResultClick = (ev, index) => {
        const { currentPlaylist } = this.state
        if (ev.target.className.includes('removePlaylistTarget')) {
            this.props.socket.emit('music:removeFromPlaylist', {
                id: currentPlaylist.playlist[index]._id,
                playlist: currentPlaylist.title
            })
            return
        }
        this.setState(() => ({
            currentSrc:
                window.location.origin +
                '/music/' +
                currentPlaylist.playlist[index]._id
        }))
    }

    handleResultClick = (ev, index) => {
        const { searchResults, playlists } = this.state
        if (ev.target.className.includes('addToPlaylistTarget')) {
            let promptVal = 'Choisissez une playlist :'
            let titles = []
            for (let i = 0; i < playlists.length; i++) {
                promptVal += `\n- ${playlists[i].title}`
                titles.push(playlists[i].title.toLowerCase())
            }
            let val = window.prompt(promptVal).toLowerCase()
            if (titles.includes(val)) {
                for (let i = 0; i < playlists.length; i++) {
                    if (playlists[i].title.toLowerCase() === val) {
                        this.setState(() => ({ addingToPlaylist: i }))
                    }
                }
            } else this.setState(() => ({ addingToPlaylist: val }))
        }

        if (!searchResults[index].inDatabase) {
            this.props.socket.emit('music:download', {
                url: searchResults[index].url,
                source: 'youtube'
            })
        } else {
            this.props.socket.emit('music:getMusic', {
                source: 'youtube',
                sourceId: searchResults[index].id
            })
        }
    }

    handleChangeQuery(event) {
        let query = event.target.value
        this.setState(() => ({ query: query }))
    }

    getResults(ev) {
        const { query } = this.state
        ev.preventDefault()
        if (!query.length) return
        this.props.socket.emit('music:search', {
            query: query,
            source: 'youtube',
            limit: 2
        })
    }

    render() {
        const {
            ref,
            index,
            onMouseDown,
            style,
            onMouseUp,
            playlists,
            searchResultsRef,
            playlistsRef,
            playlistRef,
            progressRef,
            currentPlaylist,
            searchResults,
            currentSrc,
            currentProgress,
            audioRef
        } = this.state
        return (
            <div
                ref={ref}
                className="module"
                id="module-music"
                style={style}
                onMouseDown={(ev) => {
                    onMouseDown(ev, index)
                }}
                onMouseUp={(ev) => {
                    onMouseUp(ev, index)
                }}>
                <div className="module-decorations">
                    <i className="fas fa-arrows-alt dragTarget"></i>
                    <i className="fas fa-lock-open lockTarget"></i>
                    <i className="fas fa-times closeTarget"></i>
                    <i
                        className="fas fa-outdent playlistTarget"
                        onClick={this.playlistTargetClick}></i>
                </div>
                <div className="module-body">
                    <svg
                        viewBox="0 -21 900 50"
                        className="title-container title-container__title">
                        <text x="0" y="15">
                            Music Player
                        </text>
                    </svg>
                    <audio
                        controls
                        autoPlay
                        src={currentSrc}
                        onEnded={() => {
                            this.nextSong()
                        }}
                        ref={audioRef}></audio>
                    <svg className="progress-ring" height="40" width="40">
                        <circle
                            ref={progressRef}
                            className="progress-ring__circle"
                            strokeWidth="1"
                            stroke="black"
                            fill="transparent"
                            r="18"
                            cx="20"
                            cy="20"
                            style={{
                                strokeDasharray: `${18 * 2 * Math.PI} ${
                                    18 * 2 * Math.PI
                                }`,
                                strokeDashoffset: `${18 * 2 * Math.PI}`
                            }}
                        />
                    </svg>
                    <span className="progress">
                        {currentProgress >= 0 && currentProgress < 0.99
                            ? (currentProgress * 100).toFixed(1) + '%'
                            : ''}
                    </span>
                    <form
                        className="music-form"
                        onSubmit={(ev) => {
                            this.getResults(ev)
                        }}>
                        <input
                            className="search-bar"
                            type="search"
                            minLength="1"
                            placeholder="Votre recherche..."
                            onChange={(event) => {
                                this.handleChangeQuery(event)
                            }}></input>
                        <button className="submit-search" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>

                    {
                        //Display the search results
                    }
                    <div className="searchResults" ref={searchResultsRef}>
                        {/*<SearchResult
                                index={index}
                                title={
                                    '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]'
                                }
                                length={794}
                                thumbnail="https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw"
                                onClick={this.handleResultClick}></SearchResult>*/}
                        {searchResults.map((result, index) => (
                            <SearchResult
                                key={index}
                                index={index}
                                title={result.title}
                                duration={result.duration}
                                thumbnail={result.thumbnail}
                                onClick={this.handleResultClick}></SearchResult>
                        ))}
                    </div>

                    {
                        //Display all playlists
                    }
                    <div className="playlists" ref={playlistsRef}>
                        <Playlists
                            playlists={playlists}
                            onClick={this.handlePlaylistClick}></Playlists>
                    </div>

                    {
                        //Display the current playlist
                    }
                    <div className="playlist" ref={playlistRef}>
                        <div className="currentPlaylistTitle">
                            {currentPlaylist.title}
                        </div>
                        {currentPlaylist.playlist.map((result, index) => (
                            <PlaylistResult
                                key={index}
                                index={index}
                                title={result.title}
                                duration={result.duration}
                                thumbnail={result.thumbnail}
                                onClick={
                                    this.handlePlaylistResultClick
                                }></PlaylistResult>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
MusicModule.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.func,
    socket: PropTypes.object
}

const SearchResult = ({ title, duration, thumbnail, onClick, index }) => (
    <div
        className="searchResult"
        onClick={(ev) => {
            onClick(ev, index)
        }}>
        <div>
            <img
                className="thumbnail"
                src={thumbnail}
                alt={`[Thumbnail] ${thumbnail}`}></img>
            <div className="videoLength">{formatDate(duration)}</div>
            <i className="fas fa-plus-square addToPlaylistTarget"></i>
        </div>
        <div className="videoTitle">{title} </div>
    </div>
)
SearchResult.propTypes = {
    title: PropTypes.string,
    duration: PropTypes.number,
    thumbnail: PropTypes.string,
    onClick: PropTypes.func,
    index: PropTypes.number
}

const PlaylistResult = ({ title, duration, thumbnail, onClick, index }) => (
    <div
        className="searchResult"
        onClick={(ev) => {
            onClick(ev, index)
        }}>
        <div>
            <img
                className="thumbnail"
                src={thumbnail}
                alt={`[Thumbnail] ${thumbnail}`}></img>
            <div className="playlistLength">{formatDate(duration)}</div>
            <i className="fas fa-minus-square removePlaylistTarget"></i>
        </div>
        <div className="videoTitle">{title} </div>
    </div>
)
PlaylistResult.propTypes = {
    title: PropTypes.string,
    duration: PropTypes.number,
    thumbnail: PropTypes.string,
    onClick: PropTypes.func,
    index: PropTypes.number
}

const Playlists = ({ playlists, onClick }) => (
    <div>
        {playlists.map((playlist, index) => (
            <div
                key={index}
                className="playlistResult"
                onClick={(ev) => {
                    onClick(ev, index)
                }}>
                <div>
                    <i className="far fa-play-circle"></i>
                    <img
                        className="thumbnailPlaylist"
                        src={
                            playlist.playlist.length &&
                            playlist.playlist[0].thumbnail
                        }
                        alt={`[Thumbnail]`}></img>
                    <div className="playlistLength">
                        {formatDate(playlist.duration)}
                    </div>
                    <i className="fas fa-minus-square removePlaylistTarget"></i>
                </div>
                <div className="playlistTitle">{playlist.title} </div>
            </div>
        ))}
    </div>
)
Playlists.propTypes = {
    playlists: PropTypes.array,
    onClick: PropTypes.func
}

export default MusicModule
