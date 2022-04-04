var fahrenheitToCelsiusMain = function (input) {
  // Formula for Fahrenheit to Celsius is "Celcius = (Fahrenheit-32) x 5/9".
  var celsius = ((input - 32) * 5) / 9;
  var myOutputValue =
    "So, " + input + " Fahrenheit is " + celsius + " celsius.";
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // First, convert km to miles.
  var distanceInMiles = input * 0.62;
  //Second, find out how many litres needed
  var litresNeeded = distanceInMiles / 9;
  //Then, take litres * $2.20
  var cost = litresNeeded * 2.2;
  return cost;
};

var roadTripCostComfortableMain = function (input) {
  // First, convert km to miles
  var distanceInMiles = input * 0.62;
  // Find out how many litres needed
  var litresNeeded = distanceInMiles / 9;
  // Cost savings for fuel is 2.20 - 2.00 = 0.20
  var fuelSavings = litresNeeded * 0.2;
  return fuelSavings;
};

var iceMachineMain = function (input) {
  // Input number of guests
  // Each guest needs 8 * 1.5 = 12 grams of ice
  // Assume 100 guests, 100 * 12 = 1200g of ice
  // convert grams to pounds
  // Divide pounds by 5 = hours needed
  var gramsIceNeeded = input * 12;
  var pounds = gramsIceNeeded * 0.00220462;
  var hoursNeeded = pounds / 5;
  return hoursNeeded;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
