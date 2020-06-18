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
            index: props.index,
            onMouseDown: props.onMouseDown,
            onMouseUp: props.onMouseUp,
            onload: props.onload,
            query: '',
            currentSrc: '',
            currentProgress: -1,
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

        this.props.socket.on('music:searchResult', (result) => {
            this.setState(() => ({ searchResults: result }))
        })
        this.props.socket.on('music:downloading', (result) => {
            this.setProgress(result.status.progress)
            this.setState(() => ({ currentProgress: result.status.progress }))
        })
        this.props.socket.on('music:music', (result) => {
            console.log(result)
            this.setProgress(0)
            if (this.state.addingToPlaylist === -1)
                this.setState(() => ({
                    currentProgress: -1,
                    currentSrc: 'http://localhost:3000/music/' + result._id
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
            console.log('data', data)
            const { playlists } = this.state
            for (let i = 0; i < playlists.length; i++) {
                if (playlists[i].title === data.playlist.name) {
                    let duration = 0
                    for (let j = 0; j < data.songs.length; j++) {
                        playlists[i].playlist[j] = data.songs[j]
                        duration += data.songs[j].duration
                    }
                    playlists[i].duration = duration
                    break
                }
            }
            this.setState(() => ({ playlists: playlists }))
        })

        this.props.socket.on('music:playlists', (data) => {
            console.log(data)
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
        })

        this.props.socket.on('music:addedToPlaylist', (data) => {
            console.log('added', data)
            if (data) this.props.socket.emit('music:getPlaylists')
        })

        this.props.socket.emit('music:getPlaylists')
        /*setInterval(() => {
            if (
                this.state.currentProgress > 1 ||
                this.state.currentProgress < 0
            )
                this.setState(() => ({ currentProgress: 0 }))
            else
                this.setState((prevstate) => ({
                    currentProgress: prevstate.currentProgress + 0.1
                }))
            this.setProgress(this.state.currentProgress + 0.1)
        }, 500)*/
        this.handleChangeQuery = this.handleChangeQuery.bind(this)
        this.getResults = this.getResults.bind(this)
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
    }

    handlePlaylistClick = (index) => {
        const {
            searchResultsRef,
            playlistsRef,
            playlistRef,
            playlists
        } = this.state
        searchResultsRef.current.style.display = 'none'
        playlistsRef.current.style.display = 'none'
        playlistRef.current.style.display = 'flex'
        this.setState(() => ({ currentPlaylist: playlists[index] }))
    }

    handlePlaylistResultClick = (ev, index) => {
        const { currentPlaylist } = this.state
        this.setState(() => ({
            currentSrc:
                'http://localhost:3000/music/' +
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
                        console.log(searchResults[index])
                        console.log(playlists[i])
                        this.setState(() => ({ addingToPlaylist: i }))
                    }
                }
            } else this.setState(() => ({ addingToPlaylist: val }))
        }

        this.props.socket.emit('music:download', {
            url: searchResults[index].url,
            source: 'youtube'
        })
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
            currentProgress
        } = this.state
        //if (currentProgress >= 1) this.setState(() => ({ currentProgress: -1 }))
        //console.log('progress', currentProgress)
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
                    <audio controls autoPlay src={currentSrc}></audio>
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
    length: PropTypes.number,
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
        </div>
        <div className="videoTitle">{title} </div>
    </div>
)
PlaylistResult.propTypes = {
    title: PropTypes.string,
    length: PropTypes.number,
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
                onClick={() => {
                    onClick(index)
                }}>
                <div>
                    <i className="far fa-play-circle"></i>
                    <img
                        className="thumbnailPlaylist"
                        src={playlist.playlist[0].thumbnail}
                        alt={`[Thumbnail] ${playlist.playlist[0].thumbnail}`}></img>
                    <div className="playlistLength">
                        {formatDate(playlist.duration)}
                    </div>
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
