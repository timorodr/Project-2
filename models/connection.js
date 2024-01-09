//** IMPORT DEPENDENCIES */


require("dotenv").config()
const mongoose = require("mongoose")

//** DATABASE CONNECTION */
const {DATABASE_URL, SECRET, PORT} = process.env


mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => { console.log("CONNECTED TO THE MONGOOSE")})
.on("close", () => { console.log("DISCONNECTED TO THE MONGOOSE")})
.on("error", (error) => { console.log(error)})

module.exports = mongoose