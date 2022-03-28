var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  //var myOutputValue = "hello world";
  var celsius = (input - 32) * (5 / 9);
  return celsius;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.

  // define distance in miles (conversion of km to miles)
  var distanceInMiles = input * 0.62;

  // define miles per litre of fuel
  var milesPerLitre = 9;

  // define ferrari fuel cost per litre
  var ferrariCostPerLitre = 2.2;

  // define train fuel cost per litre

  // CODE INCOMPLETE

  //var TrainCostPerLitre = 2;

  // calculate savings in fuel cost between ferrari and train
  //var costSavings = (distanceInMiles / 9) * (2.2 - 2);

  //var myOutputValue = costSavings;
  //return myOutputValue;
};

var roadTripCostComfortableMain = function (distanceInKM) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  // define distance in miles (conversion of km to miles)
  var distanceInMiles = distanceInKM * 0.62;

  // define miles per litre of fuel
  var milesPerLitre = 9;

  // define ferrari fuel cost per litre
  var ferrariCostPerLitre = 2.2;

  // define train fuel cost per litre
  var trainCostPerLitre = 2;

  // calculate savings in fuel cost between ferrari and train
  var costSavings =
    (distanceInMiles / milesPerLitre) *
    (ferrariCostPerLitre - trainCostPerLitre);

  return costSavings;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.

  // define drinks per guest
  var drinksPerGuest = 2;

  // define ice cubes per drink
  var icePerDrink = 4;

  // define grams per pound
  var gramsPerPound = 453;

  // define weight (in grams) per ice cube
  var gramsPerIce = 1.5;

  // define pounds of ice per hour
  var icePoundsPerHour = 5;

  // define duration needed for the machine as: How many guests * [drinks per guest * ice cubes per drinks] *
  var myOutputValue = "hello world";
  return myOutputValue;
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
