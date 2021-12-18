const express = require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')
// req => middleware => res

app.use([authorize, logger])

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.get('/api/products', (req, res) => {
    res.status(200).send('API')
})

app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.status(200).send('items')
})


app.listen(5000, () => {
    console.log('Server listening on 5000...')
})