const cors = require("cors");
const express = require("express");

const jayannsProfile = {
    profiles: {
        1000: {
            firstName: "Jay-Ann",
            lastName: "Bravo-Harriott", 
            prefernces: {
                foods: ["Chinese", "Indian", "Jamaican"],
                colour: "Black",
                number: [8, 11]
            },
            hoursOfSleep: 8.5
        }
    }
}

const database = {
    profiles: {
        1000: jayannsProfile,
    },
    books: {
        0: {
            title: "Animal Farm",
            author: "George Orwell",
            price: "£0.00",
            description: "....",
            image: "...."

        }
    }
}

const app = express()
app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true})) // for parsing application/x-www-form-urlenconded

//GET /profiles
app.get("/profiles", (req, res) => {
    res.json({
        status: "success",
        data: database.profiles
    })
})

//GET /profiles /:id
app.get ("/profiles/:userId", (req, res) => {
    console.log(req.params.usderId)

    const matchingProfile = database.profiles[req.params.userId]

    if (matchingProfile) {
        res.status(200).json({ // OK status code
            status: "success",
            data: matchingProfile
        })
    } else {
        res.status(401).json({  //"status(400) is a standard response (NOT FOUND) - look at http.cats"
            message: "Couldn't find a user with ID"
        })
    }
})

// POST /profiles
app.post("/profiles", (req, res) => {
    console.log(req.body)

    //find the largest key and increment it
    const existingIds = Object.keys(database.profiles);
    const largestKey = Math.max(...existingIds);

    const newKey = largestKey++

    database.profiles[newKey] = req.body

    res.status(201).json( { // created status code
        status: "success",
        message: `Created a profile with the ID of ${newKey}.`
    })

})

//DELETE /profile /:userId
app.delete("profiles/:userId", (req, res) => {

    delete database.profiles[req.params.userId] // double check if this works 

    res.status(200).json({ //OK status code
        status: "success",
        message: `deleted profile ${userId}.`
    })
})

//PUT /profiles/:userId  (MODIFY ENTIRE RESOURCE - OVERWRITES)
app.put("profiles/:userId", (req, res) => {
    const idToUpdate = database.profiles[req.params.userId]

    database.profiles[idToUpdate] = req.body // line that causes update to take effect

    res.status(200).json({ //Modified status code
        status: "success",
        message: "User updated"
    })
})


//PATCH /profiles/:userId (PARTIAL UPDATE TO RESOURCE)
app.patch("profiles/:userId", (req, res) => {
    const idToUpdate = database.profiles[req.params.userId]
    
    database.profiles[idToUpdate] = {
        ...database.profiles[idToUpdate],  
        ...req.body // "..." allows you to add data list and not replace it 
    }

    database.profiles[req.params.userId] = {
        ...database.profiles[req.params.userId],  
        ...req.body
    }

    res.status(200).json( { // OK status codes
        message: "User updated"
    })
})



app.listen(4000, () => {
    console.log("Server is running!")
})