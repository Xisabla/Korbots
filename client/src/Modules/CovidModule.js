import PropTypes from 'prop-types'
import React from 'react'

class CovidModule extends React.Component {
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
                height: '540px',
                paddingBottom: '0%',
                minWidth: '400px',
                minHeight: '390px',
                maxWidth: '800px',
                maxHeight: '710px',
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
                id="module-covid"
                style={style}
                onMouseDown={(ev) => {
                    onMouseDown(ev, index)
                }}
                onMouseUp={(ev) => {
                    onMouseUp(ev, index)
                }}>
                <i className="fas fa-arrows-alt dragTarget"></i>
                <i className="fas fa-lock-open lockTarget"></i>
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
    }
}

CovidModule.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.func
}

export default CovidModule
