const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const config = require("config");
const Ticket = require("../../models/Ticket");
const User = require("../../models/User");

// @ route GET api/tickets
// @desc   Get all Tickets
// @access Ptivate
router.get("/", auth, async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("user", ["email", "avatar"])
      .populate("ticketer", ["firstName", "lastName"]);
    res.json(tickets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route POST api/ticket/
// @desc   Create a new Ticket
// @access Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    ticketType,
    source,
    environment,
    bucket,
    project,
    release,
    process,
    status,
    owner,
    fixer,
    tester,
    standing,
    importance,
    ticketId,
    summary,
    description,
    ticketer
  } = req.body;

  const ticketFields = {};
  if (ticketType) ticketFields.ticketType = ticketType;
  if (source) ticketFields.source = source;
  if (environment) ticketFields.environment = environment;
  if (bucket) ticketFields.bucket = bucket;
  if (project) ticketFields.project = project;
  if (release) ticketFields.release = release;
  if (process) ticketFields.process = process;
  if (status) ticketFields.status = status;
  if (owner) ticketFields.owner = owner;
  if (fixer) ticketFields.fixer = fixer;
  if (tester) ticketFields.tester = tester;
  if (standing) ticketFields.standing = standing;
  if (ticketId) ticketFields.ticketId = ticketId;
  if (importance) ticketFields.importance = importance;
  if (summary) ticketFields.summary = summary;
  if (description) ticketFields.description = description;
  if (ticketer) ticketFields.ticketer = ticketer;

  try {
    let ticket = await Ticket.findOneAndUpdate(
      { ticketId: req.body.ticketId },
      { $set: ticketFields },
      { new: true, upsert: true }
    );
    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
