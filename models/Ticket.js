const mongoose = require("mongoose");
const User = require("./User");
const Profile = require("./Profile");

const TicketSchema = new mongoose.Schema({
  type: {
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
    ref: "profile"
  },
  fixer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile"
  },
  status: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  tester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile"
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
  summary: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
