const mongoose = require("mongoose");
const User = require("./User");
const Project = require("./Project");

const TicketSchema = new mongoose.Schema({
  date: {
    default: Date.now
  },
  ticketer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project'
  },
  type: {
    Type: String
  },
  description: {
    Type: String
  },
  fixer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  projectManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  tester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
