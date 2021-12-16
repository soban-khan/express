const express = require('express')
const app = express()

// or
// const app = require('express')()

app.get('/', (req, res) => {
    res.status(200).send('home page')
})

app.get('/about', (req, res) => {
    res.status(200).send('this is about page')
})

app.all('*', (req, res) => {
    res.status(404)
    res.send('resource not found')
})


app.listen(5000, () => {
    console.log('Server listening on 5000')
})