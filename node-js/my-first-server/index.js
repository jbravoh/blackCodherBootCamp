//code from external libraries (similar to import)
const express = require("express");
const cors = require("cors");

//set up for express
const app = express();
app.use(cors());

const myProfile = {
  firstName: "Jay-Ann",
  lastName: "Bravo-Harriott"
};

const facts = [
  'I am 25 years old',
  'I have a degree in Communication/Business',
  'I played basketball professionally',
  'My favorite colour is black',
  'I have four siblings',
  'I studied in America for my undergrad',
  'I enjoy singing, even though I get worse as I get older',
  'I enjoy playing playstation - favourite game is The Last of Us'
]

//routes (include a banana route)

app.get("/", (req, res) => {
  res.json({ message: "This is the local server that is running " });
});

app.get("/banana", (req, res) => {
  res.json({ message: "Love it with porridge" });
});

app.get("/aboutMe", (req, res) => {
  const randomIndex = Math.floor(Math.random() * facts.length) // create randomisation
  const randomFact = facts [randomIndex] // apply randomisation to the facts array
  res.json({
    ...myProfile, // ... puts everything from one object into another object
    fact: randomFact
  })
});


app.listen(3000, () => {
  console.log("Server is running!");
});


// to view: go in my terminal and cd my-first-server, node index.js
// go on the internet and 