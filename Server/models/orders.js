const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // Cart: {
    //     models: { type: Array, required: true },
    //     quantity: { type: Array, of: Number, required: true }

    // },
    cart: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("orders", OrderSchema)