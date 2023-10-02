const convertToCelsius = function(fahrenheit) {
  let fahrConv =  (fahrenheit - 32) * (5/9) * 10;
  fahrConv = Math.round(fahrConv) / 10;
  return fahrConv;
};

const convertToFahrenheit = function(celsius) {
  let celConv = (celsius * 9/5 + 32) * 10;
  celConv = Math.round(celConv) / 10;
  return celConv;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
