const mongoose = require("mongoose");
const User = require("./User");

const TicketSchema = new mongoose.Schema({
  ticketType: {
    type: String
  },
  source: {
    type: String
  },
  environment: {
    type: String
  },
  bucket: {
    type: String
  },
  project: {
    type: String
  },
  release: {
    type: String
  },
  process: {
    type: String
  },
  ticketer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  fixer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  status: {
    type: String
  },
  tester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  standing: {
    type: String
  },
  importance: {
    type: String
  },
  ticketId: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
