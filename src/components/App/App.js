import './App.scss'

import { inject, observer, PropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Form, Jumbotron } from 'react-bootstrap'

@inject('date') // Inject the "date" store to the props from the Provider
@inject('user') // Inject the "user" store to the props from the Provider
@observer
class App extends Component {
    constructor(props) {
        super(props)

        // Bind handlers
        this.handleChange = this.handleChange.bind(this)
    }

    // Set the proptypes
    static propTypes = {
        date: PropTypes.objectOrObservableObject,
        user: PropTypes.objectOrObservableObject
    }

    handleChange(event) {
        let name = event.target.value

        // Default value if empty
        if (!name || /^\s*$ /.test(name)) name = 'you'

        // Update the username
        this.props.user.setUsername(name)
    }

    render() {
        // Get data from the props (stores) instead of the internal state
        const { date, locale } = this.props.date
        const { user } = this.props

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

export default App
