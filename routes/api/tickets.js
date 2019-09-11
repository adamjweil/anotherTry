const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @ route  POST api/ticket
// @desc    Submit new Ticket
// @access  Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let ticketNumber = 0;
  const { ticketer, tester, fixer, project, release, ticketType, fullDescription, summary, environment, process, status, notes, date } = req.body;

  try {

    let ticket = new Ticket({
      ticketer,
      tester,
      fixer,
      project,
      release,
      icketType,
      fullDescription,
      summary,
      environment,
      process,
      status,
      notes,
      ticketNumber,
      date
    });

    ticketNumber = ticketNumber + 1

    await ticket.save()

});

// @ route GET api/users
// @desc   Get all Users
// @access Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
