const mongoose = require('mongoose')

const WatchSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    strap: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Car", WatchSchema)