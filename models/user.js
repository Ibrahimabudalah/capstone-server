const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is the mongoose user modal

const user = new Schema({
  fullname: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", user);
