require('dotenv').config({ path: './config.env' });
require('./db')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = process.env.PORT || 3002
const ENV = process.env.NODE_ENV || 'development'

app.use(express.json({ extended: true }))
app.use(cors({
    origin: process.env.CLIENT
}))
app.use(morgan('dev'))

app.use('/api', require('./routes'))


if (ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.js'))
    })
}

app.listen(port, () => console.log(`server listning on port ${port}`))