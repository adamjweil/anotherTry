const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  notifications: {
    type: Number,
    default: 0
  }
});

module.exports = Team = mongoose.model("team", TeamSchema);
