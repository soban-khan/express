const http = require('http')

const server = http.createServer((req, res) => {
    console.log('user hit the server')
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url
    //about page
    if (url == '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('<h1> this is heading </h1>')
        res.end()
    } else if (url == '/about') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('<p> this is all i remeber about me </p>')
        res.end()
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.write('<h2> wrong page </h2>')
        res.end()
    }
})

server.listen(5000)