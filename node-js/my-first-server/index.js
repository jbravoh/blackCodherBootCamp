const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const jayann = {
  firstName: "Jay-Ann",
  lastName: "Bravo-Harriott",
  favouriteColour: "black",
  age: 25,
};

app.get("/", (req, res) => {
  res.json({ message: "This is the local server that is running " });
});

app.get("banana", (req, res) => {
  res.json({ message: "Love it with porridge" });
});

app.get("aboutMe", (req, res) => {
  res.json(jayann);
});

app.listen(4000, () => {
  console.log("Server is running!");
});
