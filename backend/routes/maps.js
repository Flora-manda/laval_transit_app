var express = require("express");
var router = express.Router();

module.exports = ({ readMapFile }) => {
  router.get("/", function (req, res, next) {
    // getting the coordinates from the front-end => bodyParser
    // checking if it is in the boundary of the Laval map

    console.log("mapHelpers", readMapFile);

    readMapFile().then((bbox) => {
      const [minLon, minLat, maxLon, maxLat] = bbox;

      // check the boundaries against the provided coordinates
    });

    res.send("getting bbox");
  });

  return router;
};
