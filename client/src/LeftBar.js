import React from 'react'

const LeftBar = () => (
    <div className="col-2 border-right">
        <h3 className="my-2">Modules</h3>

        <ul className="list-group">
            <li className="list-group-item">
                <i className="fas fa-chart-area"></i> Covid-19 Info
            </li>
            <li className="list-group-item">
                <i className="fas fa-music"></i> Music Player
            </li>
            <li className="list-group-item">
                <i className="fas fa-cloud-moon-rain"></i> Meteo
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
                    <i className="fas fa-bell"></i> Notifications
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-user-tag"></i> User info
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-cog"></i> Settings
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-sign-out-alt"></i> Disconnect
                </a>
            </li>
        </ul>
    </div>
)

export default LeftBar
