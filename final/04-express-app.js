const express = require('express')
const app = express()
const path = require('path')

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).res.send('<h1>Resource not found</h1>')
})


app.listen(5000, () => {
    console.log('Server listening on port 5000')
})