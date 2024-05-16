const express = require("express");
const app = express();
const port = 5000;
const host = "localhost";

require("dotenv").config();
const User = require("./model");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
