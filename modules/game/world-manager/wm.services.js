const World = require('../models/World')

async function createWorld(name, serverOptions, worldOptions) {

    const { probability } = worldOptions
    const { ip, port } = serverOptions

    const size = Math.floor(Math.random() * 1000) + 200
    const world1 = await World.create({
        name,
        size,
        probability,
        server: {
            ip,
            port,
        }
    })

    name = `2 ${name} 2`
    const world2 = new World({
        name,
        size,
        probability,
        server: {
            ip,
            port,
        }
    })
    console.log(world2)
    await world2.save()

    console.log(world1)
    world1.size = 500;
    await world1.save();

    const worldFound = await World.findOne({})
    console.log(worldFound)

    return world1
}

exports.createWorld = createWorld