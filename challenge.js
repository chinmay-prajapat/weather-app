const request = require("postman-request");
const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2lsdmlzaCIsImEiOiJja3ZpdmdmaTcwbjV1MnBuMGx1bjgzdWJlIn0.7tV-mCgZ-rb_fzrHMVvktw";

request({ url: url, json: true }, (err, res) => {
  const { features } = res.body;
  console.log(
    "Latitude:" +
      features[0].center[0] +
      "\n" +
      "Longitude:" +
      features[0].center[1]
  );
});
