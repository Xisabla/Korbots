import PropTypes from 'prop-types'
import React from 'react'

/* import weatherimg from '../../public/meteo.png' */
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
            },
            longitude: 0,
            latitude: 0
        }

        this.getWeather = this.getWeather.bind(this)
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this)
        this.handleChangeLongitude = this.handleChangeLongitude.bind(this)

        this.props.socket.on('weather:currentData', (data) => {
            console.log(data)
        })
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    handleChangeLatitude(event) {
        if (event && event.target)
            this.setState({ latitude: parseFloat(event.target.value) })
    }

    handleChangeLongitude(event) {
        if (event && event.target)
            this.setState({ longitude: parseFloat(event.target.value) })
    }

    getWeather(event) {
        const { latitude, longitude } = this.state

        this.props.socket.emit('weather:getCurrent', { latitude, longitude })

        event.preventDefault()
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
                    <div className="col-xs-12 col-md-5 title-container">
                        <Titles />
                    </div>
                    <div className="col-xs-12 col-md-7 form-container">
                        <form onSubmit={this.getWeather}>
                            <input
                                type="number"
                                name="latitude"
                                placeholder="Latitude..."
                                onChange={this.handleChangeLatitude}
                                value={this.state.latitude}
                            />
                            <input
                                type="number"
                                name="longitude"
                                placeholder="Longitude..."
                                onChange={this.handleChangeLongitude}
                                value={this.state.longitude}
                            />
                            <button type="submit">Rechercher</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const Titles = () => (
    <div>
        <text className="title-container__title">Météo</text>
    </div>
)

WeatherModule.propTypes = {
    handleChangeLatitude: PropTypes.fun,
    handleChangeLongitude: PropTypes.fun,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.fun,
    socket: PropTypes.object
}

export default WeatherModule
