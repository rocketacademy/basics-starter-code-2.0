var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
// Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
var simpleLoopMain = function (input) {
  var counter = 0;
  var myOutputValue = " ";
  while (counter <= 6) {
    myOutputValue = myOutputValue + "hello";
    counter += 1;
  }
  return myOutputValue;
};

// Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
var loopWithinLoopMain = function (input) {
  var outerCounter = 0;
  var myOutputValue = " ";
  while (outerCounter < input) {
    var insideCounter = 0;
    while (insideCounter < input * 2) {
      myOutputValue = myOutputValue + "hello";
      insideCounter += 1;
    }
    myOutputValue = myOutputValue + "<br>";
    outerCounter += 1;
  }
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  var counter = 0;
  var myOutputValue = " ";
  while (counter >= 0) {
    myOutputValue = myOutputValue + "!";
    counter += 1;
  }
  return myOutputValue;
};
