const mongoose = require("mongoose");
const User = require("./User");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String
  },
  scheduledRelease: {
    Type: String
  },
  scheduledReleaseDate: {
    Type: Date
  },
  client: {
    Type: String
  },
  projectManagers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

module.exports = Ticket = mongoose.model("project", ProjectSchema);
