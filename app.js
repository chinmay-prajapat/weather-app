// const request = require("request"); //Since request package has been deprecated
const request = require("postman-request");
// const url =
//   "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=23.7785179,73.6874068&units=f"; //units=f(f=fahernheit)
// request({ url: url, json: true }, (err, res) => {
//   //   console.log(res.body);
//   if (res) {
//     console.log(
//       `${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. There is a ${res.body.current.precip}% chance of rain `
//     );
//   } else {
//     console.log(err);
//   }
// });
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

const gecode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoia2lsdmlzaCIsImEiOiJja3ZpdmdmaTcwbjV1MnBuMGx1bjgzdWJlIn0.7tV-mCgZ-rb_fzrHMVvktw&limit=1`;
};
gecode("Philadelphia", (error, data) => {});
