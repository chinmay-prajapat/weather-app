// const request = require("request"); //Since request package has been deprecated
const gecode = require("./utils/geocode");
const weatherForecast = require("./utils/weatherstackApi");

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/dungarpur.json?access_token=pk.eyJ1Ijoia2lsdmlzaCIsImEiOiJja3ZpdmdmaTcwbjV1MnBuMGx1bjgzdWJlIn0.7tV-mCgZ-rb_fzrHMVvktw&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search.");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

gecode.gecode("ahmedabad", (error, data) => {
  console.log(data);
});

weatherForecast(23.03, 72.58, (error, data) => {
  console.log("data", data);
});
