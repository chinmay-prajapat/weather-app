const request = require("postman-request");
const weatherForecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK}&query=${lat},${long}`; //units=f(f=fahernheit)
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("unable to connect", undefined);
    } else if (res.body.current === "") {
      callback("wrong input", undefined);
    } else {
      callback(
        undefined,
        `${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. There is a ${res.body.current.precip}% chance of rain.`
      );
    }
  });
};
module.exports = weatherForecast;
