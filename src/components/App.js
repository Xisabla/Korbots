import React, { Component } from 'react'
import './App.scss'

class App extends Component {
    constructor(props) {
        super(props)

        // Init state
        this.state = { name: 'you' }

        // Bind handlers
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let name = event.target.value

        // Default value if empty
        if (!name || /^\s*$ /.test(name)) name = 'you'

        this.setState({ name })
    }

    render() {
        return (
            <div className="App">
                <h1>
                    Hello <i>{this.state.name}</i>
                </h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
                <input
                    type="text"
                    placeholder="Your name here"
                    onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default App
