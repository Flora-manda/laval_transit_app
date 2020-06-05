var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  // getting the coordinates from the front-end

  // checking if it is in the boundary of the Laval map

  res.send("respond with a resource");
});

module.exports = router;
