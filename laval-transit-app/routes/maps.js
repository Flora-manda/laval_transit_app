var express = require("express");
var router = express.Router();

module.exports = ({ readMapFile }) => {
  router.get("/", function (req, res, next) {
    res.send(readMapFile());
  });

  return router;
};
