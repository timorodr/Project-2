// //** OUR MODELS */

const mongoose = require("./connection")


const { Schema, model } = mongoose

const profilePictureSchema = new Schema({
    name: {
        type: String
    },
    userTag: {
        type: String
    },
    profilePic: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
})

const Profile = model("ProfileMan", profilePictureSchema)

module.exports = Profile