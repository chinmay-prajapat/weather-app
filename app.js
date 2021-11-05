// const request = require("request"); //Since request package has been deprecated
const gecode = require("./utils/geocode");
const yargs = require("yargs");
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
// yargs.command({
//   command: "location",
//   describe: "location",
//   builder: {
//     location: {
//       describe: "location",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler(argv) {
//     gecode.gecode(argv.location, (error, data) => {
//       if (error) {
//         console.log(error);
//       }
//       weatherForecast(data.longitude, data.latitude, (error, weather) => {
//         if (data) {
//           console.log(data.place);
//           console.log(weather);
//         } else {
//           console.log(error);
//         }
//       });
//     });
//   },
// });
// yargs.parse();
const location = process.argv[2];
if (!location) {
  console.log("Please provide address");
}
gecode.gecode(location, (error, data) => {
  if (error) {
    console.log(error);
  }
  weatherForecast(data.longitude, data.latitude, (error, weather) => {
    if (data) {
      console.log(data.place);
      console.log(weather);
    } else {
      console.log(error);
    }
  });
});
