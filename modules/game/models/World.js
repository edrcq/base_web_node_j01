const mongoose = require("mongoose");

const worldScheme = mongoose.Schema({
    name: { 
        type: String,
    },
    size: Number,
    probability: Number,
    server: {
        ip: String,
        port: String,
    }
})

const WorldModel = mongoose.model("world", worldScheme);

module.exports = WorldModel