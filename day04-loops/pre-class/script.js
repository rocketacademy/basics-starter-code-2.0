/**
 * Follow Along (Loops)
 */

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

/**
 * Simple Loop with Variations (Loops)
 */

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  // Initialise a counter to 0.
  var counter = 0;
  var myOutputValue = '';
  // Set the while loop condition to continue when counter is less than 10.
  while (counter < input) {
    // Log hello with each iteration of the loop.
    myOutputValue += ' yes';
    // Increment the counter by 1 at the end of each loop iteration.
    counter = counter + 1;
  }
  return myOutputValue;
};

/**
 * Loop within Loop (Loops)
 */

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = '';

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + 'x';
      columnCounter = columnCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + '<br>';
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

/**
 * Infinite Loop (Loops)
 */

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var counter = 0;
  while (counter < 10) {
    console.log('counter', counter);
  }
  return myOutputValue;
};

/**
 * "For loop" variations of the examples above
 */
var simpleForLoopMain = function (input) {
  // Initialise counter, declare loop condition, and increment counter in 1 line
  for (var counter = 0; counter < input; counter += 1) {
    console.log('hello');
  }
};

var forLoopWithinLoop = function (input) {
  var myOutputValue = '';

  for (var i = 0; i < input; i += 1) {
    // The 'i' loop runs input number of times
    for (var j = 0; j < input; j += 1) {
      // The 'j' loops runs input number of time each then 'i' increments
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + 'x';

      console.log('j :', j);
    }
    // At the end of each 'i' loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + '<br>';
    console.log('i :', i);
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var infiniteForLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.

  // with "for loops", there is more room for human error, because
  // you will be reminded to (a) initialise a counter, (b) have 
  // a condition, (c) decrement or increment the counter
  // however, as seen below, an infinite loop can happen
  // if input is a positive number
  for (var counter = 0; counter < input; counter -= 1) {
    console.log('hello');
  }
};
