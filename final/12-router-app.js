const express = require('express')
const app = express()
const people = require('./routes/people')
const login = require('./routes/auth')
// static asset
app.use(express.static('./public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

// parse json data
app.use(express.json())

app.use('/api/people', people)
app.use('/login', login)


app.listen(5000, () => {
    console.log('Server listening on 5000...')
})