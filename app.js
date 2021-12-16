const http = require('http')
const {
    readFileSync
} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeLogo = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const homeStyle = readFileSync('./navbar-app/styles.css')

const server = http.createServer((req, res) => {
    // console.log('user hit the server')
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url
    console.log(url)
    // home page
    if (url == '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(homePage)
        res.end()
    } else if (url == '/about') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('<h1>about me<h1>')
        res.end()
    } else if (url == '/styles.css') {
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        res.write(homeStyle)
        res.end()
    } else if (url == '/logo.svg') {
        res.writeHead(200, {
            'content-type': 'image/svg+xml'
        })
        res.write(homeLogo)
        res.end()
    } else if (url == '/browser-app.js') {
        res.writeHead(200, {
            'content-type': 'text/javascript'
        })
        res.write(homeLogic)
        res.end()
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.write('<h1> wrong page bitch</h1>')
        res.end()
    }
})

server.listen(5000)