const mongoose = require("mongoose");
const User = require("./User");
const Project = require("./Project");

const ReleaseSchema = new mongoose.Schema({
  releaseCode: {
    Type: String,
    unique: true
  },
  releaseDate: {
    Type: Date
  },
  releaseName: {
    Type: String
  },
  releaseManager: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

module.exports = Ticket = mongoose.model("release", ReleaseSchema);
