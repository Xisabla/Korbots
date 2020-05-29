import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSet } from '../../actions'
import { Jumbotron, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './App.scss'

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
            <Jumbotron className="App">
                <h1>
                    Hello <i>{user.username} !</i>
                </h1>
                <h4>It is {date.toLocaleTimeString(locale ?? 'en-US')}</h4>

                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Not your name ? Change it ! ;)"
                        onChange={this.handleChange}
                    />
                </Form.Group>
            </Jumbotron>
        )
    }
}

// Proptypes
App.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    locale: PropTypes.string,
    user: PropTypes.exact({
        username: PropTypes.string.isRequired
    }).isRequired,
    userSet: PropTypes.func.isRequired
}

// Redux
function mapState(state) {
    return state
}

const mapDispatch = {
    userSet
}

export default connect(mapState, mapDispatch)(App)
