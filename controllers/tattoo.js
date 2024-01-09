
//** Import Dependencies */

const express = require("express")
const Tattoo = require("../models/Tattoo.js")


//** CREATE THE ROUTER */

const router = express.Router()



//** ROUTES */
// router.get("/", (req, res) => {
//     res.send("Its working man")
// })

router.get("/tattooly/seed", async (req, res) => {
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


//** INDEX ROUTE */ 
// NEED TO GET IMAGES SHOWING ON INDEX PAGE

router.get("/", async (req, res) => {
    try {

        const tattoos = await Tattoo.find({})
        res.render("tattoos/index.ejs", {tattoos})

    } catch(error) {

        res.status(400).send(error.message)
    }
})



//** NEW ROUTE */

router.get("/new", (req, res) => {
    res.render("tattoos/new.ejs")
})


//** CREATE ROUTE */

router.post("/", async (req, res) => {
    try {
        await Tattoo.create(req.body)

        res.redirect("/tattooly")

    } catch(error) {

        res.status(400).send(error.message)
    }
})

//** EDIT ROUTE */

router.get("/:id/edit", async (req, res) => {
    try {

        const id = req.params.id

        const tattoo = await Tattoo.findById(id)

        res.render("tattoos/edit.ejs", { tattoo })
        
    } catch(error) {

        res.status(400).send(error.message)
    }

})


//** UPDATE ROUTE */

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id

        await Tattoo.findByIdAndUpdate(id, req.body)

        res.redirect(`/tattooly/${id}`) // this sends back to show - can change to index if better UX

    }  catch(error) {

        res.status(400).send(error.message)
    }
})

//** DESTROY ROUTE */

router.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id

        await Tattoo.findByIdAndDelete(id)

        res.redirect("/tattooly")

    } catch(error) {

        res.status(400).send(error.message)
    }
})

//** SHOW ROUTE */

router.get("/:id", async (req , res) => {
    try {

        const id = req.params.id

        const tattoo = await Tattoo.findById(id)

        res.render("tattoos/show.ejs", {tattoo})

    } catch(error) {

        res.status(400).send(error.message)
    }
})


//** EXPORT THE ROUTER */

module.exports = router