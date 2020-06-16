import PropTypes from 'prop-types'
import React from 'react'

/* import weatherimg from '../../public/meteo.png' */
class WeatherModule extends React.Component {
    constructor(props) {
        super(props)
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
                minWidth: '540px',
                minHeight: '610px',
                maxWidth: '800px',
                maxHeight: '710px',
                left: '0px',
                top: '0px'
            },
            longitude: 0,
            latitude: 0,
            localisationMode: false,
            city: '',
            country: ''
        }

        this.getWeatherbyCoord = this.getWeatherbyCoord.bind(this)
        this.getWeatherbyCity = this.getWeatherbyCity.bind(this)
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this)
        this.handleChangeLongitude = this.handleChangeLongitude.bind(this)
        this.handleChangeLocalisationMode = this.handleChangeLocalisationMode.bind(
            this
        )
        this.handleChangeCityMode = this.handleChangeCityMode.bind(this)
        this.handleChangeCity = this.handleChangeCity.bind(this)
        this.handleChangeCountry = this.handleChangeCountry.bind(this)

        this.props.socket.on('weather:currentData', (data) => {
            this.setState({ data: data })
            console.log(data)
        })
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    handleChangeLatitude(event) {
        if (event && event.target)
            this.setState({ latitude: event.target.value })
    }

    handleChangeLongitude(event) {
        if (event && event.target)
            this.setState({ longitude: event.target.value })
    }

    getWeatherbyCoord() {
        const latitude = parseFloat(this.state.latitude)
        const longitude = parseFloat(this.state.longitude)
        this.props.socket.emit('weather:getCurrent', { latitude, longitude })
    }

    getWeatherbyCity() {
        console.log(this.state.city, this.state.country)
        this.props.socket.emit(
            'weather:getCurrent',
            this.state.city + ',' + this.state.country
        )
    }

    handleChangeLocalisationMode() {
        this.setState({ localisationMode: true })
    }

    handleChangeCityMode() {
        this.setState({ localisationMode: false })
    }

    handleChangeCity(event) {
        if (event && event.target) this.setState({ city: event.target.value })
    }

    handleChangeCountry(event) {
        if (event && event.target)
            this.setState({ country: event.target.value })
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
                <i className="fas fa-lock-open lockTarget"></i>
                <i className="fas fa-times closeTarget"></i>
                <div className="module-body">
                    <div className="col-5 title-container">
                        <Titles />
                    </div>
                    <div className="col-7 form-container">
                        <div className="search_container row">
                            <div className="search">Rechercher par:</div>
                            <button
                                onClick={this.handleChangeCityMode}
                                type="button">
                                Ville
                            </button>
                            <button
                                onClick={this.handleChangeLocalisationMode}
                                type="button">
                                Localisation
                            </button>
                        </div>
                        {this.state.localisationMode && (
                            <form className="row">
                                <input
                                    type="number"
                                    name="latitude"
                                    placeholder="Latitude..."
                                    onChange={this.handleChangeLatitude}
                                    value={this.state.latitude}
                                    max={90}
                                    min={-90}
                                    step={0.01}
                                />
                                <input
                                    type="number"
                                    name="longitude"
                                    placeholder="Longitude..."
                                    onChange={this.handleChangeLongitude}
                                    value={this.state.longitude}
                                    max={180}
                                    min={-180}
                                    step={0.01}
                                />
                                <button
                                    onClick={this.getWeatherbyCoord}
                                    type="button">
                                    Rechercher
                                </button>
                            </form>
                        )}
                        {!this.state.localisationMode && (
                            <form className="row">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Ville..."
                                    value={this.state.city}
                                    onChange={this.handleChangeCity}
                                />
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Pays..."
                                    value={this.state.country}
                                    onChange={this.handleChangeCountry}
                                />
                                <button
                                    onClick={this.getWeatherbyCity}
                                    type="button">
                                    Rechercher
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="col-7 weather-container">
                        {this.state.data && <Weather data={this.state.data} />}
                    </div>
                </div>
            </div>
        )
    }
}

const Titles = () => (
    <div>
        <p className="title-container__title">Météo</p>
    </div>
)

const Weather = (props) => {
    const { data } = props
    console.log(data)
    return (
        <div className="weather__info row">
            <div className="weather__info__left col-6">
                {data && data.name && data.country && (
                    <span className="weather__value">
                        {data.name}, {data.country}
                    </span>
                )}
                {data && data.date && (
                    <span className="weather__value">
                        <WeatherDate date={data.date} />
                    </span>
                )}
                {data && data.weatherIcon && (
                    <span className="weather__value">
                        <WeatherIcon weatherIcon={data.weatherIcon} />
                    </span>
                )}
                {data && data.temperature && (
                    <span className="weather__value">
                        {Math.round(data.temperature - 273, 15)}°C{' '}
                    </span>
                )}
            </div>
            <div className="weather__info__right col-6">
                {data && data.humidity && (
                    <p className="weather__key">
                        {' '}
                        Humidite:
                        <span className="weather__value">
                            {' '}
                            {data.humidity}%{' '}
                        </span>
                    </p>
                )}
                {data && data.wind && (
                    <p className="weather__key">
                        Vent:
                        <span className="weather__value"> {data.wind}m/s </span>
                    </p>
                )}
                {data && data.error && (
                    <p className="weather__error">{data.error}</p>
                )}
            </div>
        </div>
    )
}

const WeatherIcon = (props) => {
    return (
        <span className="weather_icon">
            {props.weatherIcon && (
                <img
                    src={`http://openweathermap.org/img/w/${props.weatherIcon}.png`}
                    alt="icon meteo"
                />
            )}
        </span>
    )
}

const WeatherDate = (props) => {
    if (props) {
        const today = new Date(props.date)
        const day = ('0' + today.getDate()).slice(-2)
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        return <span>{day + '/' + month}</span>
    } else {
        return <span></span>
    }
}

WeatherModule.propTypes = {
    handleChangeLatitude: PropTypes.func,
    handleChangeLongitude: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.func,
    socket: PropTypes.object
}

export default WeatherModule
