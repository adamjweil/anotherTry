const mongoose = require("mongoose");
const User = require("./User");
const Project = require("./Project");

const ReleaseSchema = new mongoose.Schema({
  releaseCode: {
    type: String,
    unique: true
  },
  releaseDate: {
    type: Date
  },
  name: {
    type: String
  },
  keyDeliverables: {
    type: [String]
  },
  allDeliverables: {
    type: [String]
  },
  includedProjects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project'
  },
  releaseManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

module.exports = Ticket = mongoose.model("release", ReleaseSchema);
