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
  return `The cost is ${cost}.`;
};

var roadTripCostComfortableMain = function (input) {
  // First, convert km to miles
  var distanceInMiles = input * 0.62;
  // Find out how many litres needed
  var litresNeeded = distanceInMiles / 9;
  // Cost savings for fuel is 2.20 - 2.00 = 0.20
  var fuelSavings = litresNeeded * 0.2;
  return `The amount saved is ${fuelSavings}.`;
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
  return `The number of hours needed are ${hoursNeeded}.`;
};

var beerOrderMain = function (avgNoCust) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  //Create a program for a bar to calculate how many kegs of beer they will need every day. The user will enter the average number of customers per day, and the app will estimate how many half-barrel-size kegs the bar needs per quarter.
  //Assume an average customer drinks 2 pints per visit. There are 124 pints of beer in a half-barrel keg.
  //What is the average number of customers per day?
  //User input avg no. of customer per day
  //Input * 2 pints = total pints needed
  //kegs needed = total pints / 124
  var pintsNeeded = avgNoCust * 2;
  var kegsNeeded = Math.ceil(pintsNeeded / 124);
  return `The minimum number of kegs needed are ${kegsNeeded}.`;
};

var cellularDataMain = function (dataUsage) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  //Create a program to calculate how much a user will pay for their the $19.99 50GB post-paid data plan.
  //The user will enter how many GB they use per month, and the app will tell them how much they are paying per GB of data used.
  //Assume that if the user exceeds 50GB, they will automatically purchase an additional 50GB plan.
  //You may find the built-in function Math.ceil helpful for this (you can Google how to use it).
  //For example, if the user only used 1GB this month, the app would calculate $19.99 per GB as the user paid $19.99 for the 50GB plan but only used 1GB.
  //If the user used 2GB this month, the app would calculate $9.98 per GB.
  //If the user used 51GB this month the user would have automatically been billed for 2 plans and the app would calculate $0.78 per GB.
  //How much cellular data (in GB) do you use per month?
  var plansNeeded = Math.ceil(dataUsage / 50);
  var totalCost = plansNeeded * 19.99;
  var costPerGb = Math.floor((totalCost / dataUsage) * 100) / 100;
  return `Your cost per GB is $${costPerGb}.`;
};
