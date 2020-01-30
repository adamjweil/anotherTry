const mongoose = require("mongoose");
const Profile = require("./Profile");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  terms: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  },
  admin: {
    type: Boolean,
    default: false
  }
  // profile: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "profile"
  // }
});

module.exports = User = mongoose.model("user", UserSchema);
