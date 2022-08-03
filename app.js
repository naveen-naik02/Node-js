const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
        console.log("Hello")
    }
})

server.listen(5000, () => {
    console.log('Server listening on port 5000...')
})