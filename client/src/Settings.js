import './Settings.scss'

import PropTypes from 'prop-types'
import React from 'react'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ref: React.createRef(),
            onload: props.onload,
            close: props.close,
            update: props.update,
            settings: {
                language: 'french'
            }
        }
    }

    componentDidMount() {
        this.state.onload(this.state.ref)
    }

    render() {
        const { close, update, settings } = this.state
        return (
            <div
                className="settings"
                ref={this.state.ref}
                style={{ display: 'none' }}>
                <div className="greyBack"></div>
                <div className="settingsDiv">
                    <i
                        className="fas fa-times closeTarget"
                        onClick={() => {
                            close(false)
                        }}></i>
                    <fieldset>
                        <legend>
                            {settings.language === 'french' && ' Paramètres'}
                            {settings.language === 'english' && ' Settings'}
                            {settings.language === 'german' && ' Einstellungen'}
                        </legend>
                        <label htmlFor="language">
                            {settings.language === 'french' && 'Langue :'}
                            {settings.language === 'english' && 'Language :'}
                            {settings.language === 'german' && 'Sprache :'}
                        </label>
                        <br />
                        <select
                            name="language"
                            id="language"
                            onChange={(ev) => {
                                settings.language = ev.target.value
                                this.setState(() => ({ settings: settings }))
                                update(settings)
                            }}>
                            <option value="french">Français</option>
                            <option value="english">English</option>
                            <option value="german">Deutsch</option>
                        </select>
                    </fieldset>
                </div>
            </div>
        )
    }
}

Settings.propTypes = {
    onload: PropTypes.func,
    close: PropTypes.func,
    update: PropTypes.func
}
export default Settings
