const request = require("postman-request");
const weatherForecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK}&query=${lat},${long}`; //units=f(f=fahernheit)
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("unable to connect", undefined);
    } else if (res.body.error === "") {
      callback("wrong input", undefined);
    } else {
      const { weather_descriptions, temperature, precip } = res.body.current;
      callback(
        undefined,
        `${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is a ${precip}% chance of rain.`
      );
    }
  });
};
module.exports = weatherForecast;
