const express = require("express");
const app = express();
const port = 5000;
const host = "localhost";

require("dotenv").config();
const User = require("./model");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})



app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});