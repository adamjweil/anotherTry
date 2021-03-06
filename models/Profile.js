const mongoose = require("mongoose");
const User = require("./User");
const Team = require("./Team");
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  middleInitial: {
    type: String
  },
  hireDate: {
    type: Date
  },
  skills: {
    type: [String]
  },
  title: {
    type: String
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team"
  },
  bio: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
