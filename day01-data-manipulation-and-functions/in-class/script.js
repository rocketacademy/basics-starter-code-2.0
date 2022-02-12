/**
 * Base: Fahrenheit to Celsius
 */

var fahrenheitToCelsiusMain = function (tempInFahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  return `${tempInFahrenheit} degrees Fahrenheit is ${tempInCelsius} degrees Celsius.`;
};

/**
 * Base: Road Trip Cost
 */

// 1.
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};
// 2.
var calculateTotalFuelCost = function (tripLengthInMiles) {
  var numMilesPerLitreOfFuel = 9;
  var numLitresOfFuelNeeded = tripLengthInMiles / numMilesPerLitreOfFuel;
  var costPerLitreOfFuel = 2.2;
  var fuelCost = numLitresOfFuelNeeded * costPerLitreOfFuel;
  return fuelCost;
};
// 3.
var roadTripCostBaseMain = function (tripLengthInKm) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var totalCost = calculateTotalFuelCost(tripLengthInMiles);
  // .toFixed(2) limits the number of decimal places to 2.
  // You may find it easier to use template literals to create strings instead of the + operator.
  return `It would cost $${totalCost.toFixed(2)} to drive your Ferrari ${tripLengthInKm} kilometres.`;
};

/**
 * Comfortable: Road Trip Cost
 */

// 1.
var calculateTotalFuelCostForComfortable = function (tripLengthInMiles, costPerLitreOfFuel) {
  var numMilesPerLitreOfFuel = 9;
  var numLitresOfFuelNeeded = tripLengthInMiles / numMilesPerLitreOfFuel;
  var fuelCost = numLitresOfFuelNeeded * costPerLitreOfFuel;
  return fuelCost;
};
var roadTripCostViaTrain = function (tripLengthInKm) {
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var costPerLitreOfFuelViaTrain = 2;
  var totalCost = calculateTotalFuelCostForComfortable(tripLengthInMiles, costPerLitreOfFuelViaTrain);
  // .toFixed(2) limits the number of decimal places to 2.
  // You may find it easier to use template literals to create strings instead of the + operator.
  return `It would cost $${totalCost.toFixed(2)} to travel ${tripLengthInKm} kilometres via train.`;
};
// 2.
var roadTripCostComfortableMain = function (tripLengthInKm) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var costPerLitreOfFuelViaTrain = 2;
  var costPerLitreOfFuelViaFerrari = 2.2;
  var totalCostViaTrain = calculateTotalFuelCostForComfortable(tripLengthInMiles, costPerLitreOfFuelViaTrain);
  var totalCostViaFerrari = calculateTotalFuelCostForComfortable(tripLengthInMiles, costPerLitreOfFuelViaFerrari);
  var costDifference = totalCostViaFerrari - totalCostViaTrain;
  // .toFixed(2) limits the number of decimal places to 2.
  // You may find it easier to use template literals to create strings instead of the + operator.
  return `It would cost $${costDifference.toFixed(2)} more to drive your Ferrari than taking train for ${tripLengthInKm} kilometres.`;
};

/**
 * More Comfortable: Ice Machine
 */

var calcNumIceCubesNeeded = function (numGuests) {
  var numDrinksPerGuest = 2;
  var numIceCubesPerDrink = 4;
  return numGuests * numDrinksPerGuest * numIceCubesPerDrink;
};

var calcNumPoundsOfIceFromCubes = function (numCubes) {
  var numGramsPerCube = 1.5;
  var numPoundsPerGram = 1 / 454;
  return numCubes * numGramsPerCube * numPoundsPerGram;
};

var calcNumHoursNeededToProduceIce = function (numPoundsOfIce) {
  var numPoundsOfIceProducedPerHour = 5;
  return numPoundsOfIce / numPoundsOfIceProducedPerHour;
};

var iceMachineMain = function (numGuests) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var numIceCubesNeeded = calcNumIceCubesNeeded(numGuests);
  var numPoundsOfIceNeeded = calcNumPoundsOfIceFromCubes(numIceCubesNeeded);
  var numHoursNeededToProduceIce = calcNumHoursNeededToProduceIce(numPoundsOfIceNeeded);
  return `The hotel would need to run the ice machine for ${numHoursNeededToProduceIce} hours to produce enough ice for ${numGuests} guests.`;
};

/**
 * More Comfortable: Beer Order
 */

var calcNumPintsPerQuarter = function (numCustomersPerDay) {
  var daysInQuarterYear = (52 / 4) * 7;
  var numCustomersPerQuarter = numCustomersPerDay * daysInQuarterYear;
  var avgNumPintsPerVisit = 2;
  return numCustomersPerQuarter * avgNumPintsPerVisit;
};

var convertPintsToKegs = function (numPints) {
  var numKegsPerPint = 1 / 124;
  return numPints * numKegsPerPint;
};

var beerOrderMain = function (avgNumCustomersPerDay) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  const numPintsPerQuarter = calcNumPintsPerQuarter(avgNumCustomersPerDay);
  const numKegsPerQuarter = convertPintsToKegs(numPintsPerQuarter);
  return `The bar would need to buy ${numKegsPerQuarter} kegs of beer per quarter for an average of ${avgNumCustomersPerDay} customers per day.`;
};

/**
 * More Comfortable: Cost of Cellular Data
 */

var cellularDataMain = function (numGbUsedPerMonth) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var costOf50GbPlan = 19.99;
  var num50GbPlans = Math.ceil(numGbUsedPerMonth / 50);
  var amountPaidPerMonth = num50GbPlans * costOf50GbPlan;
  var costPerGbUsed = amountPaidPerMonth / numGbUsedPerMonth;
  return `If one used ${numGbUsedPerMonth} GBs of data per month, one would be purchasing ${num50GbPlans} 50 GB plan(s) and paying $${costPerGbUsed.toFixed(2)} per GB used.`;
};
