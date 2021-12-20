const express = require('express')
const app = express()
let { products, people } = require('./data');

// static asset
app.use(express.static('./public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// parse json data
app.use(express.json())

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(401).json({ success: false, message: 'please provide your name' })
    } else {
        res.status(201).json({ success: true, person: name })
    }
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, message: 'please provide your name' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
    // console.log(req.body)
    const { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send('Please provide credentials')
    }
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))
    if (!person) return res.status(404).json({ success: false, msg: `no ${name} with id${id}` })
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) person.name = name
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) return res.status(404).json({ success: false, msg: `no one with id${req.params.id}` })
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
    console.log('Server listening on 5000...')
})