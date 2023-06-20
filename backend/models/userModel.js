// import mongoose, { model } from "mongoose"
const { mongoose, model } = require('mongoose')

const userModel = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        pic: { type: String, default: process.env.PUBLIC_URL + ("/imgs/avatar.png") }
    },
    {
        timeStamp: true
    }
)

const User = mongoose.model('User', userModel)
module.exports = User