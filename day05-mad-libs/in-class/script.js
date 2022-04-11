// global function to generate a random number within array length
var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};
// define a global array
var userAdj = [];

// Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
var madLibsAdjectivesMain = function (input) {
  // define basic variables
  var randomIndexNumber = 0;
  var myOutputValue = "Please enter any adjectives.";
  // when input is not create, to store user input adj into a global array and output array elements
  if (input != "create") {
    userAdj.push(input);
    myOutputValue = "You have entered: " + userAdj;
    console.log("user is keying adjectives");
  }
  // when input matches create, to generate random adj from the array and output full sentence
  else if (input == "create") {
    randomIndexNumber = getRandomIndex(userAdj.length);
    var finalAdj = userAdj[randomIndexNumber];
    myOutputValue =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      finalAdj +
      " wife";
  }
  return myOutputValue;
};

// Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
var inputMode = "normal";
var madLibsInputCreateMain = function (input) {
  // define basic variables
  var myOutputValue =
    "Please key in any adjectives. <br> You are in Normal Game Mode.<br> Please key in 'create' to change to Create Game Mode.";
  // Switch game mode, if input is create
  if (input == "create") {
    inputMode = "create";
    myOutputValue =
      "You are in Create Game Mode now.<br> Please enter an adjective.";
  }
  if (input == "normal") {
    inputMode = "normal";
    userAdj = [];
    myOutputValue =
      "You are in Normal Game Mode now.<br> Please enter an adjective.";
  }
  // when it is in normal mode, to add input into array list
  if (inputMode == "normal" && input != "create" && input != "normal") {
    userAdj.push(input);
    myOutputValue =
      "You have entered: " +
      userAdj +
      "<br> You are in Normal Game Mode.<br> Please key in 'create' to change to Create Game Mode.";
  }
  // when it is in create mode, output full sentence directly
  else if (inputMode == "create" && input != "create" && input != "normal") {
    myOutputValue =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      input +
      " wife. <br> Please key in 'normal' to change to Normal Game Mode.";
  }
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
// define a global array
var wordInput = [];
var madLibsMultipleTypesMain = function (input) {
  // define basic variables
  var myOutputValue = "Please key in an exclamation word.";
  wordInput.push(input);
  // first input an exclamation word
  if (wordInput.length == 1) {
    myOutputValue =
      "You have entered an exclamation word: " +
      input +
      ".<br> Next please enter an adverb.";
  }
  // second input an adverb
  if (wordInput.length == 2) {
    myOutputValue =
      "You have entered an exclamation word: " +
      wordInput[0] +
      ".<br> An adverb: " +
      wordInput[1] +
      ".<br> Next please enter a noun.";
  }
  // third input a noun;
  if (wordInput.length == 3) {
    myOutputValue =
      "You have entered an exclamation word: " +
      wordInput[0] +
      ".<br> An adverb: " +
      wordInput[1] +
      ".<br> A noun: " +
      wordInput[2] +
      ".<br> Lastly please enter an adjective.";
  }
  // last input an adjective;
  if (wordInput.length == 4) {
    myOutputValue =
      "You have entered an exclamation word: " +
      wordInput[0] +
      ".<br> An adverb: " +
      wordInput[1] +
      ".<br> A noun: " +
      wordInput[2] +
      ".<br> An adjective: " +
      wordInput[3] +
      ".<br> Please enter 'create' to form your sentence";
  }
  // input matches 'creat', output the full sentence.
  if (input == "create") {
    myOutputValue =
      '"' +
      wordInput[0] +
      '!"' +
      " he said " +
      wordInput[1] +
      " as he jumped into his convertible " +
      wordInput[2] +
      " and drove off with his " +
      wordInput[3] +
      " wife. <br> Please enter 'reset' to restart the game.";
  }
  // to restart and reset the game
  if (input == "reset") {
    myOutputValue =
      "You have restarted the game, please enter an exclamation word now.";
    wordInput = [];
  }
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
