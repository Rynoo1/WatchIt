const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    UserLastName: {
        type: String,
        required: true,
    },
    // Watches: {
    //     models: {},
    //     quantity: {}

    // },
    Total: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("orders", OrderSchema)