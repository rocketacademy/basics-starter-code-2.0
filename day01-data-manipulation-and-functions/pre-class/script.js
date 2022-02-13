var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

/**
 * Comfortable: Train Speed
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

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};