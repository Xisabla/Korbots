import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './components/App'
import { dateUpdate } from './actions'

// Create a global store for our date
const store = createStore(reducer)

// Render the App with the store provided
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// Update the time/date each seconds in the store
setInterval(() => {
    store.dispatch(dateUpdate())
}, 1000)
