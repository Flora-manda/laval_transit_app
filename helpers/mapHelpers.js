let fs = require("fs");
// read data from laval area - data was converted from shp/shx externally
const readMapFile = function () {
  const data = fs.readFileSync(process.cwd() + "/assets/laval.json");
  const convertedData = JSON.parse(data);
  console.log(convertedData.features[0].geometry.coordinates);
  return convertedData.features[0].geometry.coordinates;
};

module.exports = { readMapFile };
