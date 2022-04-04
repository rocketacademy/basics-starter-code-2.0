var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "Hi, " + input + "! " + input + " is a very cool name!";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = distanceInMiles;
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  var pi = 3.14;
  var radius = input;
  var area = 3.14 * input * input;
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = area;
  return myOutputValue;
};

var timeToSpeed = function (timeDelayInHrs) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var timeLeft = 2 - timeDelayInHrs;
  var train2Speed = 400 / timeLeft;
  var myOutputValue = train2Speed;
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
