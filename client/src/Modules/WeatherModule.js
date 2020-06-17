import PropTypes from 'prop-types'
import React from 'react'

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
            console.log(this.state.localisationMode)
            if (!this.state.localisationMode) {
                const latitude = parseFloat(data.latitude)
                const longitude = parseFloat(data.longitude)
                console.log(latitude, longitude)
                const numberOfDay = 4
                this.props.socket.emit('weather:getDailyAll', {
                    latitude,
                    longitude,
                    numberOfDay
                })
            }
            console.log(data)
        })
        this.props.socket.on('weather:dailyAllData', (data1) => {
            this.setState({ data1: data1 })
            console.log(data1)
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
        const numberOfDay = 4
        this.props.socket.emit('weather:getDailyAll', {
            latitude,
            longitude,
            numberOfDay
        })
    }

    getWeatherbyCity() {
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
                    <div className="title-container">
                        <Titles />
                    </div>
                    <div className="form-container">
                        <div className="search_container">
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
                    <div className="weather-container">
                        {this.state.data && <Weather data={this.state.data} />}
                    </div>
                    <div className="weather-daily-container">
                        {this.state.data1 && (
                            <DailyWeather data1={this.state.data1[0]} />
                        )}
                        {this.state.data1 && (
                            <DailyWeather data1={this.state.data1[1]} />
                        )}
                        {this.state.data1 && (
                            <DailyWeather data1={this.state.data1[2]} />
                        )}
                        {this.state.data1 && (
                            <DailyWeather data1={this.state.data1[3]} />
                        )}
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
                {data && data.latitude && (
                    <p className="weather__key">
                        {' '}
                        Latitude:
                        <span className="weather__value">
                            {' '}
                            {data.latitude}{' '}
                        </span>
                    </p>
                )}
                {data && data.longitude && (
                    <p className="weather__key">
                        {' '}
                        Longitude:
                        <span className="weather__value">
                            {' '}
                            {data.longitude}{' '}
                        </span>
                    </p>
                )}
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

const DailyWeather = (props) => {
    const { data1 } = props
    console.log('DailyWeatherAll')
    console.log(data1)
    return (
        <div className="weather__info">
            <div className="weather__info__left">
                {data1 && data1.date && (
                    <span className="weather__value">
                        <WeatherDate date={data1.date} />
                    </span>
                )}
                {data1 && data1.weatherIcon && (
                    <span className="weather__value">
                        <WeatherIcon weatherIcon={data1.weatherIcon} />
                    </span>
                )}
                {data1 && data1.temperature && (
                    <span className="weather__value">
                        {Math.round(data1.temperature - 273, 15)}°C{' '}
                    </span>
                )}
                {data1 && data1.error && (
                    <p className="weather__error">{data1.error}</p>
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
