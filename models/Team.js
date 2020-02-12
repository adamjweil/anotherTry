const mongoose = require("mongoose");
const Profile = require("./Profile");

const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    unique: true
  },
  teamDescription: {
    type: String
  },
  notifications: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Team = mongoose.model("team", TeamSchema);
