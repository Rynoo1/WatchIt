const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
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
    },
    price: {
        type: Number,
        required: false,
    },
    stock: {
        type: Number,
        required: false,
    }
})

module.exports = mongoose.model("products", ProductSchema)