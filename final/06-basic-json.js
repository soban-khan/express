const express = require('express')
const app = express()
const {
    products
} = require('./data')

// console.log(products)

app.get('/', (req, res) => {
    res.json(products)
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})