const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
dotenv.config()
const app = express()
connectDB()

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('Server running at 5000'.yellow.bold))
