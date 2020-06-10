import PropTypes from 'prop-types'
import React from 'react'

import weatherimg from '../../public/meteo.png'
class WeatherModule extends React.Component {
    constructor(props) {
        super(props)
        console.log('WeatherModule.props.onload = ', props.onload)
        this.state = {
            ref: React.createRef(),
            index: props.index,
            onMouseDown: props.onMouseDown,
            onMouseUp: props.onMouseUp,
            onload: props.onload,
            style: {
                width: '400px',
                height: '400px',
                paddingBottom: '0%',
                minWidth: '300px',
                minHeight: '300px',
                maxWidth: '800px',
                maxHeight: '710px',
                left: '810px',
                top: '0px'
            }
        }
    }

    componentDidUpdate() {
        //console.log(this.state.ref.current)
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    render() {
        const { ref, index, onMouseDown, onMouseUp, style } = this.state
        return (
            <div
                ref={ref}
                className="module"
                id="module-weather"
                style={style}
                onMouseDown={(ev) => {
                    onMouseDown(ev, index)
                }}
                onMouseUp={(ev) => {
                    onMouseUp(ev, index)
                }}>
                <i className="fas fa-arrows-alt dragTarget"></i>
                <div className="module-body">
                    <svg viewBox="0 0 400 15" className="module-title">
                        <text x="0" y="15">
                            Météo
                        </text>
                    </svg>
                    <img
                        src={weatherimg}
                        alt="Meteo"
                        width="90%"
                        height="70%"
                    />
                </div>
            </div>
        )
    }
}

WeatherModule.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.fun
}

export default WeatherModule
