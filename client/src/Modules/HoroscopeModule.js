import './HoroscopeModule.scss'

import PropTypes from 'prop-types'
import React from 'react'

class HoroscopeModule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ref: React.createRef(),
            predictionsRef: React.createRef(),
            index: props.index,
            onMouseDown: props.onMouseDown,
            onMouseUp: props.onMouseUp,
            onload: props.onload,
            selectedValue: 'aquarius',
            currentPrediction: { love: '', work: '', family: '', health: '' },
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

        this.props.socket.on('horoscope:currentData', (data) => {
            this.setState(() => ({ currentPrediction: data }))
            this.state.predictionsRef.current.style.display = 'block'
        })
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    handleSubmit = (ev) => {
        //Envoie au serveur
        const { selectedValue } = this.state
        this.props.socket.emit('horoscope:getCurrent', { sign: selectedValue })
        ev.preventDefault()
    }

    handleChange = (ev) => {
        let val = ev.target.value
        this.setState(() => ({ selectedValue: val }))
    }

    render() {
        const {
            ref,
            index,
            onMouseDown,
            style,
            onMouseUp,
            currentPrediction,
            predictionsRef
        } = this.state
        return (
            <div
                ref={ref}
                className="module"
                id="module-horoscope"
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
                        viewBox="0 -21 900 50"
                        className="title-container title-container__title">
                        <text x="0" y="15">
                            Horoscope
                        </text>
                    </svg>
                    <form>
                        <label htmlFor="Signe">Signe astrologique : </label>
                        <select
                            name="Signe"
                            id="Sign-select"
                            onChange={(ev) => {
                                this.handleChange(ev)
                            }}>
                            <option value="aquarius">Verseau</option>
                            <option value="pisces">Poissons</option>
                            <option value="aries">Bélier</option>
                            <option value="taurus">Taureau</option>
                            <option value="gemini">Gémeaux</option>
                            <option value="cancer">Cancer</option>
                            <option value="leo">Lion</option>
                            <option value="virgo">Vierge</option>
                            <option value="libra">Balance</option>
                            <option value="scorpio">Scorpion</option>
                            <option value="sagittarius">Sagittaire</option>
                            <option value="capricorn">Capricorne</option>
                        </select>
                        <button
                            type="submit"
                            onClick={(ev) => {
                                this.handleSubmit(ev)
                            }}>
                            Valider
                        </button>
                    </form>
                    <div className="predictions" ref={predictionsRef}>
                        <fieldset>
                            <legend>Amour</legend>
                            <div className="prediction love">
                                {currentPrediction.love}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Travail</legend>
                            <div className="prediction work">
                                {currentPrediction.work}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Famille</legend>
                            <div className="prediction family">
                                {currentPrediction.family}
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Santé</legend>
                            <div className="prediction health">
                                {currentPrediction.health}
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}
HoroscopeModule.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    index: PropTypes.number,
    ref: PropTypes.string,
    onload: PropTypes.func,
    socket: PropTypes.object
}

export default HoroscopeModule
