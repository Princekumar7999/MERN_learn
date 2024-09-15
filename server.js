const express = require('express'); // Import express
const app = express()            // Make express app(app is an object)
const path = require('path')     // Import path
const PORT = process.env.PORT || 3500  // Define a port to listen to requests

app.use('/')

app.listen(PORT,()  => console.log('Server running on port ${PORT}'))