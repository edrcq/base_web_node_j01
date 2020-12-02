require('dotenv').config()
const { startMongoose } = require('./mongo/mongoose')
const { initExpressApp, hookWithServer } = require('./webserver')

// init mongo connection
startMongoose()
    .then(async function() {
        console.log('mongo connection done')
        // const wmServices = require('./modules/game/world-manager/wm.services')
        // const world = await wmServices.createWorld('premier world', { ip: '120.0.0.1', port: 4433 }, { probability: 0.3 })
        // console.log(world)

    })
    .catch((err) =>{
        console.error(err)
        process.exit(1)
    })
// init web server
const app = initExpressApp()
const server = hookWithServer(app)

const web_port = process.env.PORT || 4021

server.listen(web_port, () => {
    console.log(`Listening on http://localhost:${web_port}`)
})


