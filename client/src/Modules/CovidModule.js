import './CovidModule.scss'

import PropTypes from 'prop-types'
import React from 'react'

const CovidModule = ({ onMouseDown, onMouseUp, style, index, ref }) => (
    <div
        ref={ref}
        style={style}
        className="module"
        draggable
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
                    COVID-19 Info
                </text>
            </svg>
            <img
                src="https://mk0gomet3vhlwol4683.kinstacdn.com/wp-content/uploads/2020/03/graph-2903.png"
                alt="Graphe Covid"
                width="90%"
                height="70%"
            />
        </div>
    </div>
)

CovidModule.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    style: PropTypes.object,
    index: PropTypes.number,
    ref: PropTypes.string
}

export default CovidModule
