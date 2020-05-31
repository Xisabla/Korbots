// Import bootstrap css (makes everything more beautiful)
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'

import { App, Footer } from './components/'
import { date, user } from './store'

// Render the App with the store provided
ReactDOM.render(
    <Provider date={date} user={user}>
        <App />
        <Footer />
    </Provider>,
    document.getElementById('root')
)

// Update the time/date each seconds in the store
setInterval(() => {
    date.udpate()
}, 1000)
