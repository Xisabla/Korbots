import PropTypes from 'prop-types'
import React from 'react'

import { CovidModule, WeatherModule } from './Modules'

const LeftBar = ({ settingsOnClick, settings, onAddModule }) => (
    <div className="col-2 border-right">
        <h3 className="my-2">Modules</h3>

        <ul className="list-group">
            <li
                className="list-group-item"
                onClick={() => {
                    onAddModule(CovidModule)
                }}>
                <i className="fas fa-chart-area"></i> Covid-19 News
            </li>
            <li className="list-group-item">
                <i className="fas fa-music"></i> Music Player
            </li>
            <li
                className="list-group-item"
                onClick={() => {
                    onAddModule(WeatherModule)
                }}>
                <i className="fas fa-cloud-moon-rain"></i> Weather
            </li>
            <li className="list-group-item">
                <i className="fas fa-list-ul"></i> TODO List
            </li>
            <li className="list-group-item">
                <i className="far fa-newspaper"></i> News
            </li>
            <li className="list-group-item">
                <i className="fas fa-inbox"></i> Mails
            </li>
            <li className="list-group-item">
                <i className="far fa-calendar-alt"></i> Calendar
            </li>
            <li className="list-group-item">
                <i className="fas fa-map-marked-alt"></i> Google Maps
            </li>
            <li className="list-group-item text-center">
                <i className="fas fa-arrow-down"></i>
            </li>
        </ul>

        <h3 className="my-2">User</h3>
        <img
            src="https://i.imgur.com/anTmbGJ.png"
            alt="Avatar"
            className="img-thumbnail"
        />

        <ul className="nav flex-column mb-2">
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-bell"></i>
                    {(settings.language === 'french' ||
                        settings.language === 'english') &&
                        ' Notifications'}
                    {settings.language === 'german' && ' Benachrichtigungen'}
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-user-tag"></i>
                    {settings.language === 'french' &&
                        ' Informations utilisateur'}
                    {settings.language === 'english' && ' User info'}
                    {settings.language === 'german' && ' Nutzerinformation'}
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#"
                    className="nav-link"
                    onClick={() => {
                        settingsOnClick(true)
                    }}>
                    <i className="fas fa-cog"></i>
                    {settings.language === 'french' && ' Paramètres'}
                    {settings.language === 'english' && ' Settings'}
                    {settings.language === 'german' && ' Einstellungen'}
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-sign-out-alt"></i>
                    {settings.language === 'french' && ' Se déconnecter'}
                    {settings.language === 'english' && ' Log out'}
                    {settings.language === 'german' && ' Ausloggen'}
                </a>
            </li>
        </ul>
    </div>
)

LeftBar.propTypes = {
    settingsOnClick: PropTypes.func,
    settings: PropTypes.object,
    onAddModule: PropTypes.func
}
export default LeftBar
