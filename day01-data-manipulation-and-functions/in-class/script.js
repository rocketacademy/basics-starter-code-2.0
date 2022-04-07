var fahrenheitToCelsiusMain = function (temp) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celsius = ((temp - 32) * 5) / 9;
  var outputMsg =
    "The temperature in celsius " + Math.round(celsius * 100.0) / 100.0;
  return outputMsg;
};

//Road Trip
var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var conMiles = 0.62;
  var kmToMiles = input * conMiles;
  var result = kmToMiles * (2.2 / 9);
  return result;
};

var main = function (Input) {
  var myOutputValue = roadTripCostBaseMain(input);
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var conMiles = 0.62;
  var kmToMiles = input * conMiles;
  var costCar = 2.2 / 9;
  var costTrain = 2 / 9;
  var differentCost = kmToMiles * costCar - kmToMiles * costTrain;
  var myOutputValue = Math.round(differentCost * 100.0) / 100.0;
  return myOutputValue;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  // 1 minute 37.8 gram
  var gramPerMin = 37.8;
  var iceCube = 1.5;
  //One guest 12 gram for 2 drinks
  var totalGuest = input;
  var drinkPerGuest = iceCube * 4 * 2;
  var myOutputValue = (totalGuest * drinkPerGuest) / gramPerMin;
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var oneKegBeer = 124 / 0.5;
  //one customer drink 2 pint, how many pint needed base on customer
  var myOutputValue = input / oneKegBeer;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var planDataCost = 19.99;
  var totalPlan = Math.ceil(input / 50);
  var costOfPlan = totalPlan * planDataCost;
  var result = (totalPlan * planDataCost) / input;
  return result;
};

var main = function (input) {
  var myOutputValue = cellularDataMain(input);
  return myOutputValue;
};
