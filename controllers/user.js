//** IMPORT DEPENDENCIES */

const express = require("express")
const User = require("../models/user.js")
const bcrypt = require("bcrypt")
const Profile = require("../models/profile.js")

//** CREATE ROUTER */
const router = express.Router()


//** ROUTES */

router.get("/signup", (req, res) => {
    res.render("user/signup.ejs")
})

router.post("/signup", async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(
            req.body.password,
            await bcrypt.genSalt(10)
        )

        await User.create(req.body)
        
        
        res.redirect("/user/login")

        } catch (error) {

        res.status(400).send(error.message);

        }
        
})

router.get("/login", (req, res) => {
    res.render("user/login.ejs")
})

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if(!user) {
            throw new Error("User does not exist. Sign up!")
        }

        const result = await bcrypt.compare(password, user.password)

        if (!result) {
            throw new Error("Password does not match")
        }

        req.session.username = username
        // req.session.profilePicture = profilePicture
        req.session.loggedIn = true


        res.redirect("/tattooly")
        } catch (error) {

        res.status(400).send(error.message);
        }
    
})


//** EDIT ROUTE */

router.get("/:id/edit", async (req, res) => {
    try {

        const id = req.params.id

        const user = await User.findById(id)

        res.render("user/edit.ejs", { user })
        
    } catch(error) {

        res.status(400).send(error.message)
    }

})
//** UPDATE ROUTE */

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id

        await User.findByIdAndUpdate(id, req.body)

        res.redirect("/tattooly") // this sends back to show - can change to index if better UX

    }  catch(error) {

        res.status(400).send(error.message)
    }
})

router.get("/logout", (req, res) => {
    // destroy and redirect to main page
    req.session.destroy((err) => {
        res.redirect("/")
    })
})

module.exports = router