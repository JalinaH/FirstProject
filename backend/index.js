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

app.post("/users", async (req, res) => {
  const user = new User({
    id: req.body.id,
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    email: req.body.email,
    dob: req.body.dob,
    account_type: req.body.account_type,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
