const mongoose = require("./db");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  dob: {
    type: String,
  },
  accounttype: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
