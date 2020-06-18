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
            /* Declaration of initial states */
            longitude: 0,
            latitude: 0,
            locationMode: false,
            geolocationMode: false,
            city: '',
            country: ''
        }

        /* Set the context for the functions to be class object */
        this.getWeatherbyGeolocation = this.getWeatherbyGeolocation.bind(this)
        this.getWeatherbyCoord = this.getWeatherbyCoords.bind(this)
        this.getWeatherbyCity = this.getWeatherbyCity.bind(this)
        this.handleChangeLocationMode = this.handleChangeLocationMode.bind(this)
        this.handleChangeCityMode = this.handleChangeCityMode.bind(this)
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this)
        this.handleChangeLongitude = this.handleChangeLongitude.bind(this)
        this.handleChangeCity = this.handleChangeCity.bind(this)
        this.handleChangeCountry = this.handleChangeCountry.bind(this)

        /* Data recovery for the current weather */
        this.props.socket.on('weather:currentData', (data) => {
            if (!this.state.error) {
                this.setState({ data: data })
                if (!this.state.locationMode) {
                    const latitude = parseFloat(data.latitude)
                    const longitude = parseFloat(data.longitude)
                    const numberOfDay = 4
                    this.props.socket.emit('weather:getDailyAll', {
                        latitude,
                        longitude,
                        numberOfDay
                    })
                }
            }
        })
        /* Data recovery for the weather of the week */
        this.props.socket.on('weather:dailyAllData', (data1) => {
            this.setState({ data1: data1 })
        })
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    /* Function to update the latitude value */
    handleChangeLatitude(event) {
        if (event && event.target)
            this.setState({ latitude: event.target.value })
    }

    /* Function to update the longitude value */
    handleChangeLongitude(event) {
        if (event && event.target)
            this.setState({ longitude: event.target.value })
    }

    /* Function to update the location mode value (true) */
    handleChangeLocationMode() {
        this.setState({ locationMode: true })
        this.setState({ geolocationMode: false })
    }

    /* Function to update the location mode value (false) */
    handleChangeCityMode() {
        this.setState({ locationMode: false })
        this.setState({ geolocationMode: false })
    }

    /* Function to update the city value */
    handleChangeCity(event) {
        if (event && event.target) this.setState({ city: event.target.value })
    }

    /* Function to update the country value */
    handleChangeCountry(event) {
        if (event && event.target)
            this.setState({ country: event.target.value })
    }

    /* Function to find the weather thanks to geolocation of the computer */
    getWeatherbyGeolocation() {
        this.setState({ geolocationMode: true })
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((geo) => {
                // Execute only if the location is allowed by the user
                const latitude = parseFloat(geo.coords.latitude)
                const longitude = parseFloat(geo.coords.longitude)
                this.props.socket.emit('weather:getCurrent', {
                    latitude,
                    longitude
                })
                const numberOfDay = 4
                this.props.socket.emit('weather:getDailyAll', {
                    latitude,
                    longitude,
                    numberOfDay
                })
            })
        }
    }

    /* function to find the weather by the coordinates */
    getWeatherbyCoords() {
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

    /* Function to find the weather by the city name */
    getWeatherbyCity() {
        this.props.socket.emit(
            'weather:getCurrent',
            this.state.city + ',' + this.state.country
        )
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
                    {/* Display the title of the module */}
                    <div className="title-container">
                        <Titles />
                    </div>
                    <div className="form-container">
                        {/* Display the 3 options: search by geolocation, by location or by city with buttons*/}
                        <div className="search-container">
                            {/* Geolocation get immediately the weather */}
                            <button
                                onClick={this.getWeatherbyGeolocation}
                                type="button">
                                Géolocalisation
                            </button>
                            <button
                                onClick={this.handleChangeCityMode}
                                type="button">
                                Ville
                            </button>
                            <button
                                onClick={this.handleChangeLocationMode}
                                type="button">
                                Localisation
                            </button>
                        </div>
                        <div className="form-container2">
                            {/* If the user chooses "localisation" there are 2 inputs: Latitude and Longitude */}
                            {this.state.locationMode && (
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
                                    {/* Button to search the result with the 2 parameters entered */}
                                    <button
                                        onClick={this.getWeatherbyCoords}
                                        type="button">
                                        Rechercher
                                    </button>
                                </form>
                            )}

                            {/* If the user chooses "Ville" there are 2 inputs: Ville and Pays */}
                            {!this.state.locationMode &&
                                !this.state.geolocationMode && (
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
                                        {/* Button to search the result with the 2 parameters entered */}
                                        <button
                                            onClick={this.getWeatherbyCity}
                                            type="button">
                                            Rechercher
                                        </button>
                                    </form>
                                )}
                        </div>
                    </div>
                    {/* Display the weather and the conditions of the current day with the "Weather" component*/}
                    <div className="weather-container">
                        {this.state.data && <Weather data={this.state.data} />}
                    </div>
                    {/* Display the weather and the conditions of next few days with the "WeatherDaily" component*/}
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

/* Title component to display the title Météo */
const Titles = () => (
    <div>
        <p className="title-container__title">Météo</p>
    </div>
)

/* Weather component to display the current weather and the conditions (humidite or wind) 
We display city, country, date, icon and temperature in a box in the left side 
and the conditions: latitude, longitude, humidity and wind in a box in the right side */
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
            </div>
        </div>
    )
}

/* Weather component to display the weather of the next few days
We display city, country, date, icon and temperature in a boxe */
const DailyWeather = (props) => {
    const { data1 } = props
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
            </div>
        </div>
    )
}

/* WeatherIcon component to display the corresponding icon */
const WeatherIcon = (props) => {
    return (
        <span className="weather__icon">
            {props.weatherIcon && (
                <img
                    src={`http://openweathermap.org/img/w/${props.weatherIcon}.png`}
                    alt="icon meteo"
                />
            )}
        </span>
    )
}

/* WeatherDate component to display the current date */
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

/* PropTypes declarations */
WeatherModule.propTypes = {
    handleChangeLatitude: PropTypes.func,
    handleChangeLongitude: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.func,
    socket: PropTypes.object,
    locationMode: PropTypes.bool,
    geolocationMode: PropTypes.bool,
    data: PropTypes.object
}

Weather.propTypes = {
    data: PropTypes.object,
    name: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    weatherIcon: PropTypes.string,
    temperature: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.number
}

DailyWeather.propTypes = {
    data1: PropTypes.object,
    date: PropTypes.instanceOf(Date),
    weatherIcon: PropTypes.string,
    temperature: PropTypes.number
}

WeatherIcon.propTypes = {
    weatherIcon: PropTypes.string
}

export default WeatherModule
