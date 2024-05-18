//** IMPORT DEPENDENCIES */

const mongoose = require("./connection")
const Tattoo = require("./Tattoo.js")
const Profile = require("./profile.js")


mongoose.connection.on("open", async (req, res) => {
    try {
        const startTattoos = [
            {image: "https://inkppl.com/en/assets/components/phpthumbof/cache/080621-1911-2599.833e3cd9a6380cda0ae7a2552ad1ed1b.jpg", description: "This the mona lisa?", uploadDate: "2002-12-09" },
            {image: "https://i.pinimg.com/564x/5d/3b/c0/5d3bc0ce362ce691cb557f158569ce20.jpg", description: "This a dragon?", uploadDate: "2002-12-11" },
            {image: "https://external-preview.redd.it/by-adri-reigada-at-blanco-roto-in-barcelona-spain-v0-BJxBesp6mHL-xEu8YBxcVbtylJauLyOYS3q0QWhmHiE.jpg?width=640&crop=smart&auto=webp&s=f131d5d969740d7535875d45218c3733d168bf14", description: "My boi adri?", uploadDate: "2002-11-09" },
        ]

        await Tattoo.deleteMany({}) // Delete all tattoos

        // Seed starter tattoos
        const data = await Tattoo.create(startTattoos)

        
        console.log("--------TATTOOS CREATED----------");
        console.log(data);
        console.log("--------TATTOOS CREATED----------");
        
        // close the DB connection
        mongoose.connection.close();

    } catch(error) {

        console.log("---------", error.message, "-----------")
        
    }
})

// //** SEED */
