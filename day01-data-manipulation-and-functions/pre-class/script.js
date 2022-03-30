var main = function (radius) {
  var pi = 3.14;
  var radius;
  var area = pi * radius * radius;
  var myOutputValue = area;
  return myOutputValue;
};

var greetingMain = function (Name) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var Name;
  var myOutputValue =
    "Hello " +
    Name +
    "! Did you know that Albert Einstein's Brain was stolen when he died in 1955? I hope you learn something new today, " +
    Name +
    "!";
  return myOutputValue;
};

var metricMain = function (distanceInKm) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = `Hello there! ${distanceInKm} kilometres is equal to ${distanceInMiles} miles.`;

  return myOutputValue;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

/* Helper Functions */

// Conversion of Minutes to Hours
var convertMinutestoHours = function (mins) {
  return (mins = mins / 60);
};

var calculateTrain2Speed = function (delayInMinutes) {
  var trainSpeed = 200;
  var timeToTokyo = 2;
  // Distance = Speed * Time
  var distanceToTokyo = trainSpeed * timeToTokyo;
  // Calculate the remaining time for travel after subtracting the delay in time
  var remainTimeforTravel = timeToTokyo - convertMinutestoHours(delayInMinutes);
  // Calculate the speed train 2 needs, assuming the same distance needs to be covered at a reduced time.
  var trainTwoNewSpeed = distanceToTokyo / remainTimeforTravel;
  // return trainTwoNewSpeed
  return trainTwoNewSpeed;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var trainTwoNewSpeed = calculateTrain2Speed(input);
  var myOutputValue = `If there is a ${input}min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1`;
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.

  var myOutputValue = "hello world";
  return myOutputValue;
};
