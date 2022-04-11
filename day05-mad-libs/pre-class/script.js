var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.

  // Index starts at 0, representing the 0th index of the array
  var index = 0;

  // We will iterate over the letters array
  var letters = ["a", "b", "c"];

  // Run the loop while index is less than the length of the array
  for (var index = 0; index < letters.length; index += 1) {
    // letters[index] represents a different element for each loop iteration
    var currentLoopLetter = letters[index];

    // Log the current element in each iteration
    console.log(currentLoopLetter);
  }
  return currentLoopLetter;
};
