const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    id: Number,
    f_name: String,
    l_name: String,
    email: String,
    dob: Date,
    account_type: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
