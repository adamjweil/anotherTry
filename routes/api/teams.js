const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const config = require("config");

const Team = require("../../models/Team");

// @ route GET api/teams
// @desc Get all teams
// @access Public
router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    if (!teams) {
      return res.status(400).json({ msg: "There are no Teams" });
    }
    res.json(teams);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route POST api/teams
// @desc Post new teams
// @access Private
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { teamName, teamDescription } = req.body;
  const teamFields = {};
  if (teamName) teamFields.teamName = teamName;
  if (teamDescription) teamFields.teamDescription = teamDescription;

  try {
    let team = await Team.findOneAndUpdate(
      { team: teamName },
      { $set: teamFields },
      { new: true, upsert: true }
    );
    res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
