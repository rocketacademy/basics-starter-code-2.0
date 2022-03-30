/* 
The user enters a temperature in Fahrenheit. The program should output the conversion to Celsius in the output box.
Formula for Fahrenheit to Celcius: Celcius = (Fahrenheit-32) x 5/9
*/

/* 
The user enters a temperature in Fahrenheit. The program should output the conversion to Celsius in the output box.
Write the code inside the main function first, then extract the code into a helper function that accepts Fahrenheit as the input and outputs Celcius.
*/

// Formula for Fahrenheit to Celsius: Celcius = (Fahrenheit-32) x 5/9

var fahrenheitToCelsiusMain = function (tempInFahrenheit) {
  // User inputs Fahrenheit
  // Conversion of Fahrenheit to Celsius
  var tempInCelsius = ((tempInFahrenheit - 32) * 5) / 9;
  console.log("temp in Celsius is " + tempInCelsius);
  // Output Celsius to 2 Decimal Places.
  var myOutputValue = `The temperature ${tempInFahrenheit} Fahrenheit is equal to the temperature in ${tempInCelsius.toFixed(
    2
  )} degree Celsius.`;
  return myOutputValue;
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
};

/* 
The user will enter the length (in km) of a planned road trip in his brand new Ferrari. Write a program that outputs the total fuel cost (in $) of the road trip.
A new Ferrari is able to travel 9 miles/litre of fuel. Fuel costs $2.20/litre. Use the approach below to solve the problem.
*/

var convertKmToMiles = function (distanceInKm) {
  //Conversion of Miles to Km. Miles = Km * 0.62
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (tripLengthInMiles) {
  var numMilesPerLitreOfFuel = 9;
  var numLitresOfFuelRequired = tripLengthInMiles / numMilesPerLitreOfFuel;
  var costPerLitreOfFuel = 2.2;
  var fuelCost = numLitresOfFuelRequired * costPerLitreOfFuel;
  return fuelCost;
};

var roadTripCostBaseMain = function (tripLengthInKm) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var totalCost = calculateTotalFuelCost(tripLengthInMiles);
  var myOutputValue = `The total cost to drive your Ferrari is $${totalCost.toFixed(
    2
  )} to cover a distance of ${tripLengthInKm} kilometres.`;
  return myOutputValue;
};

/* The user enjoyed his road trip so much that he decided to do another road trip again but 
he wishes to compare the cost of travelling via train against the cost of travelling via his Ferrari. 

The user will enter the length (in km) of the road trip. Write a program that outputs the savings 
in fuel cost (in $) of the road trip if he were to travel via train compared to using his Ferrari.

The Ferrari and train are both able to travel 9 miles/litre of fuel. Fuel for the Ferrari costs $2.20/litre. 
Fuel for the train costs $2.00/litre. Use the approach below to solve the problem.*/
var calculateTotalFuelCostComfortable = function (
  tripLengthInMiles,
  costPerLitreOfFuel
) {
  var numMilesPerLitreOfFuel = 9;
  var numLitresOfFuelRequired = tripLengthInMiles / numMilesPerLitreOfFuel;
  var fuelCost = numLitresOfFuelRequired * costPerLitreOfFuel;
  return fuelCost;
};

var trainRoadTripCost = function (tripLengthInKm) {
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var costPerLitreOfFuelForTrain = 2;
  var totalCostTrain = calculateTotalFuelCostComfortable(
    tripLengthInMiles,
    costPerLitreOfFuelForTrain
  );
  return `It would cost $${totalCostTrain.toFixed(
    2
  )} to travel ${tripLengthInKm} kilometres via train}`;
};

var roadTripCostComfortableMain = function (tripLengthInKm) {
  var tripLengthInMiles = convertKmToMiles(tripLengthInKm);
  var costPerLitreFuelTrain = 2;
  var costPerLitreFuelFerrari = 2.2;
  var totalCostTrain = calculateTotalFuelCostComfortable(
    tripLengthInMiles,
    costPerLitreFuelTrain
  );
  var totalCostFerrari = calculateTotalFuelCostComfortable(
    tripLengthInMiles,
    costPerLitreFuelFerrari
  );
  var costDifference = totalCostFerrari - totalCostTrain;
  var myOutputValue = `It would cost a difference of $${costDifference.toFixed(
    2
  )} to drive the Ferarri than taking the train for a total of ${tripLengthInKm} kilometres`;
  return myOutputValue;
};

/* 
A hotel uses an ice machine to prepare ice for guests. They want to start the ice machine as close to each event as possible, so that the ice doesn't melt. 
In order to do this, they need to estimate how long they will need to run the ice machine.
Create a program that estimates the duration the ice machine needs to run. The user will input the number of guests for the event.
Assume each guest needs 2 drinks. Each drink has 4 ice cubes. Each cube weights 1.5 grams. The hotel's American-made ice machine produces 5 pounds of ice per hour.
*/

//User input number of Guests
//Calculate the number of ice Cubes needed per guest
var calculateNumOfIceCubesNeeded = function (numberGuests) {
  var numberOfDrinksPerGuest = 2;
  var numberOfIceCubesPerDrink = 4;
  return numberGuests * numberOfIceCubesPerDrink * numberOfDrinksPerGuest;
};
//Calculate number of pound of ice from cubes
var calculatePoundsOfIceFromCubes = function (numCubes) {
  var weightOfCubeInGrams = 1.5;
  var convertGramToPound = 1 / 454;
  return numCubes * convertGramToPound * weightOfCubeInGrams;
};
//Calculate Time needed to Produce x amount of Ice
var calculateNumHoursNeededToProduceIce = function (numPoundsOfIce) {
  var numOfPoundsOfIceInOneHour = 5;
  return numPoundsOfIce / numOfPoundsOfIceInOneHour;
};

var iceMachineMain = function (numberGuests) {
  var numIceCubesNeeded = calculateNumOfIceCubesNeeded(numberGuests);
  var numPoundsOfIceNeeded = calculatePoundsOfIceFromCubes(numIceCubesNeeded);
  var numHoursNeededtoProduceIce = calculateNumHoursNeededToProduceIce(
    numPoundsOfIceNeeded
  );
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = `The ice machine will need to run for ${numHoursNeededtoProduceIce.toFixed(
    2
  )} hours to produce enough ice for ${numberGuests} guests.`;
  return myOutputValue;
};

/*
Create a program for a bar to calculate how many kegs of beer they will need every day. The user will enter the average number of customers per day, 
and the app will estimate how many half-barrel-size kegs the bar needs per quarter.
Assume an average customer drinks 2 pints per visit. There are 124 pints of beer in a half-barrel keg.
*/

//User to enter average number of customers per day
//Calculate number of pints required per day
//Calculate number of half-barrel kegs required per day
//Calculate number of half-barrel-size kegs required per quarter (52 weeks in a year, 91 days per quarter)

var calculateNumberPintsPerQuarter = function (numCustomersPerDay) {
  var daysInOneQuarter = 91;
  var numOfCustomersPerQuarter = numCustomersPerDay * daysInOneQuarter;
  var avgNumPintsPerVisit = 2;
  var totalAvgPintsPerQuarter = avgNumPintsPerVisit * numOfCustomersPerQuarter;
  return totalAvgPintsPerQuarter;
};

var convertPintsToKegs = function (numOfPints) {
  var numOfKegs = numOfPints / 124;
  return numOfKegs;
};

var beerOrderMain = function (avgNumCustomersPerDay) {
  var numPintsPerQuarter = calculateNumberPintsPerQuarter(
    avgNumCustomersPerDay
  );
  var numKegsPerQuarter = convertPintsToKegs(numPintsPerQuarter);
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = `The bar would require ${numKegsPerQuarter.toFixed(
    2
  )} kegs of beer per quarter for an average number of ${avgNumCustomersPerDay} customers per day`;
  return myOutputValue;
};

/* 
Create a program to calculate how much a user will pay for their $19.99 50GB post-paid data plan. 

The user will enter how many GB they use per month, and the app will tell them how much they are paying per GB of data used.

Assume that if the user exceeds 50GB, they will automatically purchase an additional 50GB plan. 

You may find the built-in function Math.ceil helpful for this (you can google how to use it).

For example, if the user only used 1GB this month, the app would calculate $19.99 per GB as the user paid $19.99 for the 50GB plan but only used 1GB.

If the user used 2GB this month, the app would calculate $9.98 per GB. If the user used 51GB this month the user would have automatically been billed for 2 plans 
and the app would calculate $0.78 per GB.
*/

// User to input how much Gb used per month
// Return Output of How Much They Are Paying Per Gb of Data Used

var cellularDataMain = function (numGbUsedPerMonth) {
  var costOf50GbPlan = 19.99;
  var num50GbPlans = Math.ceil(numGbUsedPerMonth / 50);
  var totalCostPerMonth = num50GbPlans * costOf50GbPlan;
  var costPerGbUsed = totalCostPerMonth / numGbUsedPerMonth;
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = `You used ${numGbUsedPerMonth} GBs of data this month, you will be purchasing ${num50GbPlans} 50 GB Plan(s) and paying $${costPerGbUsed.toFixed(
    2
  )} per GB used.`;
  return myOutputValue;
};
