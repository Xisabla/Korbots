import './WeatherModule.scss'

import PropTypes from 'prop-types'
import React from 'react'

import weatherimg from '../../public/meteo.png'

const WeatherModule = ({ onMouseDown, onMouseUp, style, index, ref }) => (
    <div
        ref={ref}
        style={style}
        className="module"
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
            <img src={weatherimg} alt="Meteo" width="90%" height="70%" />
        </div>
    </div>
)

WeatherModule.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    style: PropTypes.object,
    index: PropTypes.number,
    ref: PropTypes.string
}

export default WeatherModule
