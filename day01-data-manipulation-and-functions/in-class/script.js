var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var formula = ((input - 32) * 5) / 9;
  var myOutputValue = formula;
  return `${input} Fahrenheit is ${myOutputValue} in Celcius`;
};

var roadTripCostBaseMain = function (input) {
  // user inputs trip length in km
  //convert distance covered in mile per litre to distance in km per litre
  var lengthKmPerLitre = 9 * 1.6;
  //convert price per litre to price per km
  var pricePerKm = 2.2 / lengthKmPerLitre;
  //user gets cost of trip
  var totalPrice = pricePerKm * input;
  var myOutputValue = totalPrice;
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var lengthKmPerLitre = 9 * 1.6;
  //convert price per litre to price per km
  var savingsPerKm = 0.2 / lengthKmPerLitre;
  //user gets cost of trip
  var totalSavings = savingsPerKm * input;
  var myOutputValue = totalSavings;
  return myOutputValue;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  //find out the weight of ice needed for each guest
  var weightOfIcePerGuestInGm = 2 * 4 * 1.5;
  //convert pounds of ice per guest to grams
  var weightOfIcePerGuestInP = weightOfIcePerGuestInGm / 454;
  //time needed to make ice for each guest
  var timeNeededPerGuestInHr = weightOfIcePerGuestInP / 5;
  //total time taken
  var totalTime = timeNeededPerGuestInHr * input;
  var myOutputValue = totalTime;
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
