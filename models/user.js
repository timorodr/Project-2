//** IMPORT DEPENDENCIES */

const mongoose = require("./connection.js")

//** DEFINE MODEL */

const { Schema, model } = mongoose

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = model("User", userSchema)


module.exports = User