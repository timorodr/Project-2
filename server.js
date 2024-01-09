//** IMPORT DEPENDENCIES */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const Tattoo = require("./models/Tattoo.js")
const TattooRouter = require("./controllers/tattoo.js")
const UserRouter = require("./controllers/user.js")

// const fs = require("fs")


//** CREATE APP OBJECT */
const app = express()

app.get("/", (req, res) => {
    res.render("index.ejs")
})

//** MIDDLEWARE */

app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use("/tattooly", TattooRouter)
app.use("/user", UserRouter)


//** SERVER LISTENER */

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})