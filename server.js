//** IMPORT DEPENDENCIES */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
// const Tattoo = require("./models/Tattoo.js")

// .env variables
const {DATABASE_URL, SECRET, PORT} = process.env


//** DATABASE CONNECTION */
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => { console.log("CONNECTED TO THE MONGOOSE")})
.on("close", () => { console.log("DISCONNECTED TO THE MONGOOSE")})
.on("error", (error) => { console.log(error)})


const { Schema, model } = mongoose

const tattooSchema = new Schema({
    image: {
        type: Buffer,
        required: true
    },
    description: {
        type: String
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
})

const Tattoo = model("Tattoo", tattooSchema)


//** CREATE APP OBJECT */
const app = express()

//** MIDDLEWARE */

app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


//** ROUTES */
app.get("/", (req, res) => {
    res.send("Its working man")
})

app.get("/tattooly/seed", async (req, res) => {
    try {
        const startTattoos = [
            {image: "https://inkppl.com/en/assets/components/phpthumbof/cache/080621-1911-2599.833e3cd9a6380cda0ae7a2552ad1ed1b.jpg", description: "This the mona lisa?", uploadDate: "2002-12-09" },
            {image: "https://i.pinimg.com/564x/5d/3b/c0/5d3bc0ce362ce691cb557f158569ce20.jpg", description: "This a dragon?", uploadDate: "2002-12-11" },
            {image: "https://external-preview.redd.it/by-adri-reigada-at-blanco-roto-in-barcelona-spain-v0-BJxBesp6mHL-xEu8YBxcVbtylJauLyOYS3q0QWhmHiE.jpg?width=640&crop=smart&auto=webp&s=f131d5d969740d7535875d45218c3733d168bf14", description: "My boi adri?", uploadDate: "2002-11-09" },
        ]

        await Tattoo.deleteMany({}) // Delete all tattoos

        // Seed starter tattoos
        const tattoos = await Tattoo.create(startTattoos)

        res.json(tattoos)
    } catch(error) {
        console.log(error.message)
        res.status(400).send(error.message)
    }
})


//** SERVER LISTENER */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})