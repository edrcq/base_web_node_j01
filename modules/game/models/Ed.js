const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    pair: String,
    asks: Array,
    bids: Array,
    maxBid: {
        price: Number,
        volume: Number,
    },
    maxAsk: {
        price: Number,
        volume: Number,
    },
    
})

const model = mongoose.model('Book', schema)

exports.model = model
exports.schema = schema