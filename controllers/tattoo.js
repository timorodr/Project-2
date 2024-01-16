
//** Import Dependencies */

const express = require("express")
const Tattoo = require("../models/Tattoo.js")


//** CREATE THE ROUTER */

const router = express.Router()



//** ROUTER MIDDLEWARE */

router.use((req, res, next) => {
    if(req.session.loggedIn){
        next()
    } else {
        res.redirect("/user/login")
    }
})



//** INDEX ROUTE */ 
// NEED TO GET IMAGES SHOWING ON INDEX PAGE

router.get("/", async (req, res) => {
    try {

        const username = req.session.username
        console.log(username)
        const tattoos = await Tattoo.find({ username })


        // const budget = req.session.budget

        res.render("tattoos/index.ejs", {tattoos, username})

    } catch(error) {

        res.status(400).send(error.message)
    }
})



//** NEW ROUTES */

router.get("/new", (req, res) => {
    res.render("tattoos/new.ejs")
})

router.get("/newsettings", (req, res) => {
    res.render("tattoos/newsettings.ejs")
})


//** CREATE ROUTE */

router.post("/", async (req, res) => {
    try {

        req.body.username = req.session.username

        await Tattoo.create(req.body)

        res.redirect("/tattooly")

    } catch(error) {

        res.status(400).send(error.message)
    }
})

// router.post("/", async (req, res) => {
//     try {

//         req.body.username = req.session.username

//         await Tattoo.create(req.body)

//         res.redirect("/tattooly")

//     } catch(error) {

//         res.status(400).send(error.message)
//     }
// })

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