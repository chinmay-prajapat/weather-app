// const request = require("request"); //Since request package has been deprecated
const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=23.7785179,73.6874068&units=f"; //units=f(f=fahernheit)
request({ url: url, json: true }, (err, res) => {
  //   console.log(res.body);
  console.log(
    `${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. There is a ${res.body.current.precip}% chance of rain `
  );
});
