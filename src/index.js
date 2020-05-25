import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// Simply update the App each seconds
setInterval(() => {
    ReactDOM.render(<App />, document.getElementById('root'))
}, 1000)
