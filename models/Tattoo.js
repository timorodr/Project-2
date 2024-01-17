// //** OUR MODELS */

const mongoose = require("./connection")


const { Schema, model } = mongoose

const tattooSchema = new Schema({
    image: {
       type: String,
    //    required: true
    },
    description: {
        type: String
    },
    // uploadDate: {
    //     type: Date,
    //     default: Date.now
    // },
    username: {
        type: String
    },
    name: {
        type: String
    },
    // userHandle: {
    //     type: String
    // },
    budget: {
        type: String
    }, 
    // profilePhoto: {
    //     type: String
    // },
    calendar: {
        type: Date
    }
})

const Tattoo = model("Tattoo", tattooSchema)

module.exports = Tattoo