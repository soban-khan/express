const express = require('express')
const app = express()

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.get('/', logger, (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})



app.listen(5000, () => {
    console.log('Server listening on 5000...')
})