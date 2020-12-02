const { createWorld } = require('./wm.services')

async function PostCreateWorld(req, res) {
    const { body, query } = req 

    const world = await createWorld(body.name, {}, {})
    res.json(world)
}

exports.PostCreateWorld = PostCreateWorld