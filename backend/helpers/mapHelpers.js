let shapefile = require("shapefile");

const readMapFile = function () {
  return shapefile
    .read(process.cwd() + "/assets/laval.shp")
    .then((data) => data.bbox)
    .catch((err) => console.log(err));
};

module.exports = { readMapFile };
