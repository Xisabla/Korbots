import React, { Component } from 'react'
import { observer, PropTypes, inject } from 'mobx-react'
import { Jumbotron, Form } from 'react-bootstrap'
import './App.scss'

@inject('store')
@observer
class App extends Component {
    constructor(props) {
        super(props)

        // Bind handlers
        this.handleChange = this.handleChange.bind(this)
    }

    static propTypes = {
        store: PropTypes.objectOrObservableObject
    }

    handleChange(event) {
        let name = event.target.value

        // Default value if empty
        if (!name || /^\s*$ /.test(name)) name = 'you'

        // Update the username
        this.props.store.setUsername(name)
    }

    render() {
        // Get data from the props (global store) instead of the internal state
        const { date, locale, user } = this.props.store

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
