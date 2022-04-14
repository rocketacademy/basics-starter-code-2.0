var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";
  var counter = 2;
  while (counter < 6) {
    myOutputValue = myOutputValue + `hello`;
    counter = counter + 1;
  }
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "";
  var outerCounter = 0;
  while (outerCounter < input) {
    var innerCounter = 0;
    while (innerCounter < 2) {
      myOutputValue = myOutputValue + `hello`;
      innerCounter = innerCounter + 1;
    }
    myOutputValue = myOutputValue + `<br>`;
    outerCounter = outerCounter + 1;
  }
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
