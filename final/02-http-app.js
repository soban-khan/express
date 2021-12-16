const http = require('http')
const {
    readFileSync
} = require('fs')

const homePage = readFileSync('./public/index.html')
const homeLogo = readFileSync('./public/logo.svg')
const homeLogic = readFileSync('./public/browser-app.js')
const homeStyle = readFileSync('./public/styles.css')

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