import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSet } from '../actions'
import PropTypes from 'prop-types'
import './App.scss'

function mapState(state) {
    return state
}

const mapDispatch = {
    userSet
}

class App extends Component {
    constructor(props) {
        super(props)

        // Bind handlers
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let name = event.target.value

        // Default value if empty
        if (!name || /^\s*$ /.test(name)) name = 'you'

        // Update the username and dispatch
        this.props.userSet(name)
    }

    render() {
        // Get data from the props (global store) instead of the internal state
        const { date, locale, user } = this.props

        return (
            <div className="App">
                <h1>
                    Hello <i>{user.username}</i>
                </h1>
                <h2>It is {date.toLocaleTimeString(locale ?? 'en-US')}</h2>
                <input
                    type="text"
                    placeholder="Your name here"
                    onChange={this.handleChange}></input>
            </div>
        )
    }
}

App.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    locale: PropTypes.string,
    user: PropTypes.exact({
        username: PropTypes.string.isRequired
    }).isRequired,
    userSet: PropTypes.func.isRequired
}

export default connect(mapState, mapDispatch)(App)
