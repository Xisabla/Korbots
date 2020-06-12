import React from 'react'
import { render } from 'react-dom'
import io from 'socket.io-client'

import App from './App'

// Socket from Socket.IO
// NOTE: Will show errors while not running with the real server, that's why it is commented at the moment
const socket = io()

socket.on('connected', (id) => {
    if (id === socket.id) console.log('Socket connected')
})

// App Rendering
render(<App />, document.getElementById('root'))