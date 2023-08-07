
/* (100 °F - 32) × 5/9 = 37,778 °C */

const convertToCelsius = function(far) {
let cel;

  if (far < 0) {
    cel = far - 32 * (5/9);
  } else {
    cel = far - 32 * (5/9);
  }
  
  return cel;
};


/* (100 °C × 9/5) + 32 = 212 °F */

const convertToFahrenheit = function(cel) {
let far;

  if (cel < 0) {
    far = (cel * 5/9) + 32;
  } else {
    far = (cel * 5/9) + 32;
  }
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
