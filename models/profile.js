// //** OUR MODELS */

const mongoose = require("./connection")


const { Schema, model } = mongoose

const profilePictureSchema = new Schema({
    name: {
        type: String
    },
   
})

const Profile = model("ProfileMan", profilePictureSchema)

module.exports = Profile