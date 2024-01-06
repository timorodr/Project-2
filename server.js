//** IMPORT DEPENDENCIES */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

// .env variables
const {DATABASE_URL, SECRET, PORT} = process.env


//** DATABASE CONNECTION */
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => { console.log("CONNECTED TO THE MONGOOSE")})
.on("close", () => { console.log("DISCONNECTED TO THE MONGOOSE")})
.on("error", (error) => { console.log(error)})


//** CREATE APP OBJECT */
const app = express()



//** ROUTES */
app.get("/", (req, res) => {
    res.send("Its working man")
})


//** SERVER LISTENER */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})