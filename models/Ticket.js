const mongoose = require("mongoose");
const User = require("./User");

const TicketSchema = new mongoose.Schema({
  ticketType: {
    Type: String
  },
  source: {
    Type: String
  },
  environment: {
    Type: String
  },
  bucket: {
    Type: String
  },
  project: {
    Type: String
  },
  release: {
    Type: String
  },
  process: {
    Type: String
  },
  owner: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  fixer: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  status: {
    Type: String
  },
  tester: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  standing: {
    Type: String
  },
  importance: {
    Type: String
  },
  ticketer: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  ticketId: {
    Type: String
  },
  date: {
    Type: Date,
    default: Date.now
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
