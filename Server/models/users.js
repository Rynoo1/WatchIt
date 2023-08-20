const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity")

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id }, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
};

const User = mongoose.model("user", UserSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().required().label("First Name"),
        lastname: Joi.string().required().label("Last Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity.required().label("Password")
    });
    return schema.validate(data)
};

module.exports = {User, validate};