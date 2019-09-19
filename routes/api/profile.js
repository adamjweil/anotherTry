const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @ route GET api/profile/me
// @desc   Get current users profile
// @access Public
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["email", "avatar"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route POST api/profile/
// @desc   Create users profile
// @access Public
router.post("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    firstName,
    lastName,
    handle,
    team,
    title,
    hireDate,
    bio,
    skills,
    githubusername,
    twitter,
    linkedin,
    facebook,
    youtube
  } = req.body;

  // Build Profile object
  const profileFields = {};
  profileFields.user = req.user;
  if (firstName) profileFields.user = firstName;
  if (lastName) profileFields.user = lastName;
  if (handle) profileFields.user = handle;
  if (team) profileFields.team = team;
  if (title) profileFields.title = title;
  if (hireDate) profileFields.hireDate = hireDate;
  if (bio) profileFields.bio = bio;
  if (githubusername) profileFields.githubusername = githubusername;
  if (skills) {
    profileFields.skills = skills.split(",").map(skill => skill.trim());
  }

  profileFields.social = {};
  if (twitter) profileFields.social.twitter = twitter;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (facebook) profileFields.social.facebook = facebook;
  if (youtube) profileFields.social.youtube = youtube;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      profile.save();

      return res.json(profile);
    } else {
      // Create
      profile = new Profile({ profileFields });
      res.json(profile);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route GET api/profile
// @desc   Get all Profile
// @access Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["email", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route GET api/profile/user/:user_id
// @desc   Get a specific Profile
// @access Private
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @ route DELETE api/profile
// @desc   Delete a profile, user & posts
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
