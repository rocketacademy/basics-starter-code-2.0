var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

/**
 * Red Mode (Program State for Game Modes)
 */

var mode = 'green';

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  if (input == 'greenmode') {
    mode = 'green';
  } else if (input == 'bluemode') {
    mode = 'blue';
  } else if (input == 'redmode') {
    mode = 'red';
  }

  var myOutputValue =
    'A fool sees not the same tree that a wise man sees. -William Blake';

  if (mode == 'blue') {
    myOutputValue =
      'The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau';
  }
  if (mode == 'red') {
    myOutputValue = 'A drop of ink may make a million think. –Lord Byron';
  }

  return myOutputValue;
};