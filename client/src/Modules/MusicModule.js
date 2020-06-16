import './MusicModule.scss'

import PropTypes from 'prop-types'
import React from 'react'

class MusicModule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ref: React.createRef(),
            index: props.index,
            onMouseDown: props.onMouseDown,
            onMouseUp: props.onMouseUp,
            onload: props.onload,
            style: {
                width: '600px',
                height: '400px',
                paddingBottom: '0%',
                minWidth: '540px',
                minHeight: '360px',
                maxWidth: '840px',
                maxHeight: '560px',
                left: '0px',
                top: '0px'
            }
        }
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    render() {
        const { ref, index, onMouseDown, style, onMouseUp } = this.state
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
                </div>
                <div className="module-body">
                    <svg
                        viewBox="0 -20 900 50"
                        className="module-title title-container__title">
                        <text x="0" y="15">
                            Music Player
                        </text>
                    </svg>
                    <audio controls></audio>
                    <form
                        className="music-form"
                        onSubmit={(ev) => {
                            ev.preventDefault()
                        }}>
                        <input
                            type="search"
                            minLength="1"
                            placeholder="Votre recherche..."></input>
                        <input type="submit" value="Rechercher"></input>
                    </form>
                    <div className="searchResults">
                        <SearchResult
                            title="[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [1/2]"
                            length="1:02:13"
                            thumbnail="https://i.ytimg.com/an_webp/IP7v7NI50IQ/mqdefault_6s.webp?du=3000&sqp=CLz2ovcF&rs=AOn4CLAkkZkZpYeQsipy-RD-L7S_3owNaw"></SearchResult>
                        <SearchResult
                            title="[LSDLP] Bob Lennon - Dragon Ball Z - Betting - 03/06/20 - Partie [2/2]"
                            length="54:13"
                            thumbnail="https://i.ytimg.com/an_webp/KnXQ0qwIc_E/mqdefault_6s.webp?du=3000&sqp=CMzho_cF&rs=AOn4CLAoGr6dmZcpvk5XTJ0N0Fs3rCOCUQ"></SearchResult>
                    </div>
                </div>
            </div>
        )
    }
}

const SearchResult = ({ title, length, thumbnail }) => (
    <div className="searchResult">
        <div>
            <img
                className="thumbnail"
                src={thumbnail}
                alt={`[Thumbnail] ${thumbnail}`}></img>
            <div className="videoLength">{length}</div>
        </div>
        <div className="videoTitle">{title} </div>
    </div>
)
SearchResult.propTypes = {
    title: PropTypes.string,
    length: PropTypes.string,
    thumbnail: PropTypes.string
}

MusicModule.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.func
}

export default MusicModule
