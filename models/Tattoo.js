// //** OUR MODELS */

const mongoose = require("./connection")


const { Schema, model } = mongoose

const tattooSchema = new Schema({
    image: {
       type: String,

    },
    description: {
        type: String
    },

    username: {
        type: String
    },
    name: {
        type: String
    },
  
    budget: {
        type: String
    }, 

    calendar: {
        type: Date
    }
})

const Tattoo = model("Tattoo", tattooSchema)

module.exports = Tattoo