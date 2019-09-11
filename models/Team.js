const mongoose = require("mongoose");
const User = require("./User");

const TeamSchema = new mongoose.Schema({
  ticketName: {
    Type: String,
    unique: true
  },
  employee: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  date: {
    Type: Date,
    default: Date.now
  }
});

module.exports = Team = mongoose.model("team", TeamSchema);
