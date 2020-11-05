const http = require('http')

class App {
    constructor() {
        this.routes = []
        this.server = http.createServer(this.requestListener.bind(this))
    }

    get(url, callback) {
        this.routes.push({
            url, callback
        })
    }

    requestListener(req, res) {
        console.log(req.url)
        const theGoodRoute = this.findRoute(req.url)
        if (theGoodRoute) {
            return theGoodRoute.callback(req, res)
        }
        else {
            res.end(`Cannot ${req.method.toUpperCase()} ${req.url}`)
        }
    }

    findRoute(url) {
        return this.routes.find(route => route.url === url)
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }
}

const app = new App()

app.get('/myurl', (req, res) => {
    console.log('Route registered and working !')
    res.end('Bye!')
})

app.listen(4022, () => {
    console.log('Listening on 4022')
})