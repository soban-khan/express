const authorize = (req, res, next) => {
    console.log(req.query)
    const { user } = req.query
    if (user === 'soban') {
        req.user = { name: 'soban', id: 5 }
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize