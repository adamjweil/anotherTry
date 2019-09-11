const mongoose = require("mongoose");
const User = require("./User");
const Project = require("./Project");

const TicketSchema = new mongoose.Schema({
  date: {
    Type: Date,
    default: Date.now
  },
  ticketer: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  tester: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  fixer: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  project: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "project"
  },
  release: {
    Type: mongoose.Schema.Types.ObjectId,
    ref: "release"
  },
  ticketType: {
    Type: String
  },
  fullDescription: {
    Type: String
  },
  summary: {
    Type: String
  },
  environment: {
    Type: String
  },
  process: {
    Type: String
  },
  status: {
    Type: String
  },
  notes: {
    Type: String
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
