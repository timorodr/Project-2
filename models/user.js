//** IMPORT DEPENDENCIES */

const mongoose = require("./connection.js")

//** DEFINE MODEL */

const { Schema, model } = mongoose

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePicture: {type: String, default: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"}
})

const User = model("User", userSchema)


module.exports = User