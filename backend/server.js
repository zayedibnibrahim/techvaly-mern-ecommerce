const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
dotenv.config()

const app = express()

connectDB()
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('Server running at 5000'.yellow.bold))
