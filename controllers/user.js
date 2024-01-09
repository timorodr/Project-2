//** IMPORT DEPENDENCIES */

const express = require("express")
const User = require("../models/user.js")
const bcrypt = require("bcrypt")

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
        req.session.loggedIn = true


        res.redirect("/tattooly")
        } catch (error) {

        res.status(400).send(error.message);
        }
    
})

router.get("/logout", (req, res) => {
    // destroy and redirect to main page
    req.session.destroy((err) => {
        res.redirect("/")
    })
})

module.exports = router