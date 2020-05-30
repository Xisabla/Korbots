import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import store from './store/index'
import { App, Footer } from './components/'

// Import bootstrap css (makes everything more beautiful)
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Render the App with the store provided
ReactDOM.render(
    <Provider store={store}>
        <App />
        <Footer />
    </Provider>,
    document.getElementById('root')
)

// Update the time/date each seconds in the store
setInterval(() => {
    store.updateDate()
}, 1000)
