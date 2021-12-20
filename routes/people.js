const express = require('express')
const router = express.Router()
let { products, people } = require('../data');


router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

router.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(401).json({ success: false, message: 'please provide your name' })
    } else {
        res.status(201).json({ success: true, person: name })
    }
})

router.post('/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, message: 'please provide your name' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})


router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) return res.status(404).json({ success: false, msg: `no one with id${req.params.id}` })
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
})

module.exports = router