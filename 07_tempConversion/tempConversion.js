
/* (100 °F - 32) × 5/9 = 37,778 °C */

const convertToCelsius = function(far) {
  return Math.round((far - 32) * (5/9) * 10) / 10;
};


/* (100 °C × 9/5) + 32 = 212 °F */

const convertToFahrenheit = function(cel) {
  return Math.round(((cel * 9) / 5 + 32) * 10) / 10 ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
