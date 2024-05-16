const mongoose = require("mongoose");

const dbURI = process.env.DB_URL;

mongoose
    .connect(dbURI)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.log("Error connecting to the database: ", error);
    });

module.exports = mongoose;