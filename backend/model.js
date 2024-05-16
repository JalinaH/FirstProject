const mongoose = require("./db");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  f_name: {
    type: String,
  },
  l_name: {
    type: String,
  },
  email: {
    type: String,
  },
  dob: {
    type: String,
  },
  account_type: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
