/// NEW CHANGES

// 1.  Remember! Global variables exist throughout the program
// But variables with function scope ONLY exist inside the function when the function runs
// Let's understand this code

var papayaCount = 0;

var main = function () {
  papayaCount = papayaCount + 1;
  var myOutputValue = "You have " + papayaCount + " papayas";
  return myOutputValue;
};

//  Q: Why does papayaCount on line 5 have the var keyword and line 7 doesn't?

//  Q: What behaviour would we see if we moved line 5 inside the main function?

//  Q: What behaviour would we see if we moved line 5 below the main function?

//  Q: Will moving line 9 above line 8 make a difference in how the program behaves?

// ################################################################################

// 2. Global Scope

var papayaCount = 0;

console.log("papaya count outside");
console.log(papayaCount);

var main = function () {
  papayaCount = papayaCount + 1;

  console.log("papaya count inside");
  console.log(papayaCount);

  var myOutputValue = "You have " + papayaCount + " papayas";
  return myOutputValue;
};

// ################################################################################

// 3. Function Scope

var papayaCount = 0;

console.log("myOutputValue outside");
console.log(myOutputValue);

var main = function (input) {
  papayaCount = papayaCount + 1;

  var myOutputValue = "You have " + papayaCount + " papayas";

  console.log("myOutputValue inside");
  console.log(myOutputValue);

  return myOutputValue;
};

///////////////////////////////////////////////

// Take user name in first game mode
// Then play game in second game mode

// Global variable
// Used as Game state / programme state
var mode = "input username";

var userName = "";

var main = function (input) {
  console.log("input:", input);
  console.log("mode:", mode);

  var myOutputValue = "";

  if (mode == "input username") {
    userName = input;
    mode = "play SPS";
    myOutputValue = `Hi ${userName}, please enter Scissors, paper or stone to play`;
  } else if (mode == "play SPS") {
    // ..... SPS game logic and helper function
    console.log("SPS Game,", input);
    myOutputValue = `${userName}, you entered ${input} as your guess. You WON/LOST/DREW!`;
  }

  return myOutputValue;
};

///////////////////////////////////////////////

// Used as Game state / programme state example
var mode = "meat";

var main = function (input) {
  console.log("input:", input);

  if (input == "i love meat") {
    mode = "meat";
  } else if (input == "i hate meat") {
    mode = "veg";
  }

  console.log("mode:", mode);

  var myOutputValue = "";

  if (mode == "meat") {
    myOutputValue = "Wow cheeseburger so goooood";
  }

  if (mode == "veg") {
    myOutputValue = "GIVE ME THAT SALAD!";
  }

  return myOutputValue;
};
