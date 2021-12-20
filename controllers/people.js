let { products, people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(401).json({ success: false, message: 'please provide your name' })
    } else {
        res.status(201).json({ success: true, person: name })
    }
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).json({ success: false, message: 'please provide your name' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => person.id === Number(id))
    if (!person) return res.status(404).json({ success: false, msg: `no ${name} with id${id}` })
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) person.name = name
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) return res.status(404).json({ success: false, msg: `no one with id${req.params.id}` })
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}