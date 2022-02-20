/**
 * Default Template (Our First Program)
 */

var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};

/**
 * Greeting Program (Our First Program)
 */

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = 'Hello ' + input + ', you look great today!';
  return myOutputValue;
};

/**
 * Metric Conversion Program (Our First Program)
 */

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInMiles = input * 0.62;

  var myOutputValue =
    'Hi! ' + input + 'km is equal to ' + distanceInMiles + ' miles.';
  return myOutputValue;
};

/**
 * Base: Run Example Code (Functions I)
 */

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInKm + "km is " + distanceInMiles + " mile(s)";
};

var convertMinutesToHours = function (minutes) {
  var hours = minutes / 60;
  return minutes + " minute(s) is " + hours + " hour(s)";
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.

  // Comment out the functions you are not using
  // var myOutputValue = convertMinutesToHours(input);
  var myOutputValue = convertKmToMiles(input)
  return myOutputValue;
};

/**
 * Comfortable: Train Speed (Functions I)
 */

/*
  HELPER FUNCTIONS
*/
var convertMinsToHrs = function (mins) {
  return mins / 60;
};

var calcTrainTwoSpeed = function (delayInMins) {
  // save the fixed values to variables
  var trainSpeed = 200;
  var timeToTokyo = 2;
  // calculate the distance to tokyo
  // relevant mathematical formula to note: dist = speed x time
  var distanceToTokyo = trainSpeed * timeToTokyo;

  // calculate new time available for travel after subtracting the delay
  var remainingTimeForTravel = timeToTokyo - convertMinsToHrs(delayInMins);

  // calculate the speed that train 2 needs to travel at, in order to cover the same distance at a reduced travel time
  trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;

  // return the new speed; 'toFixed' limits the ans to a specified decimal place
  return trainTwoNewSpeed.toFixed(2);
};

/*
  MAIN FUNCTION
*/
var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var trainTwoNewSpeed = calcTrainTwoSpeed(input);
  var myOutputValue = `Given a ${input}min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1`;
  return myOutputValue;
};

/**
 * Comfortable: More Comfortable: Clock (Functions I)

 */

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.

  // get number of hours and minutes from input
  var minsPerHour = 60;
  var numHours = 1 + input / minsPerHour;
  var numMins = input % minsPerHour;

  // angle of hour hand (from 12)
  var numberOfHours = 12;
  var oneRoundAngle = 360;
  var anglePerHour = oneRoundAngle / numberOfHours;
  var hourAngle = anglePerHour * numHours;

  // angle of minute hand (from 12)
  var minutesPerHour = 60;
  var anglePerMinute = oneRoundAngle / minutesPerHour;
  var minuteAngle = anglePerMinute * numMins;

  var angleHourAndMin = Math.abs(hourAngle - minuteAngle);
  return angleHourAndMin;
};
