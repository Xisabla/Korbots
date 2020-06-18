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
            index: props.index,
            onMouseDown: props.onMouseDown,
            onMouseUp: props.onMouseUp,
            onload: props.onload,
            query: '',
            currentSrc: '',
            currentProgress: -1,
            searchResults: [],
            playlists: [
                {
                    title: 'Ma playlist',
                    length: '2:35:23',
                    playlist: [
                        {
                            title:
                                '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                            length: '1:02:13',
                            thumbnail:
                                'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                        },
                        {
                            title:
                                '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                            length: '1:02:13',
                            thumbnail:
                                'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                        },
                        {
                            title:
                                '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                            length: '1:02:13',
                            thumbnail:
                                'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                        },
                        {
                            title:
                                '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                            length: '1:02:13',
                            thumbnail:
                                'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                        },
                        {
                            title:
                                '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                            length: '1:02:13',
                            thumbnail:
                                'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                        }
                    ]
                },
                {
                    title: 'Ma deuxième playlist',
                    length: '3:42:03',
                    playlist: [
                        {
                            title:
                                '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                            length: '1:02:13',
                            thumbnail:
                                'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                        }
                    ]
                },
                {
                    title: 'Ma playliste',
                    length: '23:17',
                    playlist: [
                        {
                            title:
                                '[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]',
                            length: '1:02:13',
                            thumbnail:
                                'https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw'
                        }
                    ]
                }
            ],
            currentPlaylist: { playlist: [] },
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
            console.log(result)
            this.setState(() => ({ currentProgress: result.status.progress }))
        })
        this.props.socket.on('music:music', (result) => {
            console.log(result)
            /*this.setState(() => ({
                currentSrc:
                    'file:///D:/VisualStudioProjects/NodejsProjects/Korbots/server/storage' +
                    result.path
            }))*/
        })

        this.handleChangeQuery = this.handleChangeQuery.bind(this)
        this.getResults = this.getResults.bind(this)
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

    handleResultClick = (index) => {
        const { searchResults } = this.state
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
            currentPlaylist,
            searchResults,
            currentSrc,
            currentProgress
        } = this.state
        if (currentProgress >= 1) this.setState(() => ({ currentProgress: -1 }))
        console.log('progress', currentProgress)
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
                    <span className="progress">
                        {currentProgress >= 0 && currentProgress < 1
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
                                length={result.duration}
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
                            <SearchResult
                                key={index}
                                index={index}
                                title={result.title}
                                length={result.length}
                                thumbnail={result.thumbnail}></SearchResult>
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

const SearchResult = ({ title, length, thumbnail, onClick, index }) => (
    <div
        className="searchResult"
        onClick={() => {
            onClick(index)
        }}>
        <div>
            <img
                className="thumbnail"
                src={thumbnail}
                alt={`[Thumbnail] ${thumbnail}`}></img>
            <div className="videoLength">{formatDate(length)}</div>
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
                        {formatDate(playlist.length)}
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
