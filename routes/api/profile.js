const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const config = require("config");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const ObjectId = require("ObjectId");
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

  const { firstName, lastName, handle, team, title } = req.body;

  // Build Profile object
  const profileFields = {};
  profileFields.user = req.user;

  if (firstName) profileFields.firstName = firstName;

  if (lastName) profileFields.lastName = lastName;

  if (handle) profileFields.handle = handle;
  if (team) profileFields.team = team;
  if (title) profileFields.title = title;

  user = await User.findOne({ user: req.user._id });
  if (user) profileFields.user = req.user;
  const id = ObjectId(user._id);

  console.log("id");
  console.log(id);

  try {
    // console.error(profileFields);
    profile = await Profile.findOne({ user });
    console.error("profile");
    console.error(profile);
    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: profileFields.user.id },
        { $set: { profile: profileFields } },
        { new: true }
      );

      profile.save();
      res.json(profile);
    } else {
      // Create
      if (user) profileFields.user = req.user;
      let profile = new Profile(profileFields);
      console.log("hello");
      // profile.user = req.user;

      profile.save();
      return res.json(profile);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/profile
// @desc   Get all Profile
// @access Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.findBy({ user: req.user }).populate("user", [
      "email",
      "avatar"
    ]);
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
      user: req.user.id
    }).populate("user", ["avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
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
