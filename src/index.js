import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { App, Footer } from './components/'
import { dateUpdate } from './actions'

// Import bootstrap css (makes everything more beautiful)
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Create a global store for our date
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
    store.dispatch(dateUpdate())
}, 1000)
