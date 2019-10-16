const express = require("express");
const router = express.Router();

// @ route GET api/test
// @desc Test route
// @access Public
router.get("/", (req, res) => res.send("Tests Route"));

module.exports = router;
