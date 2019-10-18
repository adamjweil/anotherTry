const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  notification_count: {
    type: Number,
    default: 0
  },
  terms: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
