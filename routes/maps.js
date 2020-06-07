var express = require("express");
var router = express.Router();

module.exports = ({ readMapFile }) => {
  router.get("/mapbox", function (req, res, next) {
    res.send(readMapFile());
  });

  return router;
};
