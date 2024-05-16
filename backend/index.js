const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const host = "localhost" || process.env.HOST;

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

app.patch("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.f_name) {
      user.f_name = req.body.f_name;
    }
    if (req.body.l_name) {
      user.l_name = req.body.l_name;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.dob) {
      user.dob = req.body.dob;
    }
    if (req.body.account_type) {
      user.account_type = req.body.account_type;
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.deleteOne({ id: userId }); 
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
