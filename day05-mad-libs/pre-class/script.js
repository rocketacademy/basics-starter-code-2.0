var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
var names = [];
var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.

  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the names array, and set found to true if the input name already
  // exists in the names array

  for (var index = 0; index < names.length; index += 1) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }

  // If no duplicate name was found, add the input name to the names array
  if (!found) {
    names.push(input);
  }

  // Return the full array of names
  var myOutputValue = "All names: " + names;
  return myOutputValue;
};
