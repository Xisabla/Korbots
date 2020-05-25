const express = require('express')
const path = require('path')

// Instantiate server with express
const app = express()

// Set public/ as static to access files
app.use(express.static(path.join(__dirname, 'public')))

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
    console.log('Local: http://localhost:3000/')
})
