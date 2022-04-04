// create variable to store count for wins
var numberOfWins = 0;
// calculate percentage
var winPercentage = function () {
  var myOutputValue =
    (numberOfWins / (numberOfWins + numberOfLosses)) * 100 + "%";
  return myOutputValue;
};

var wordGenerated = "";

var randomWordGenerator = function () {
  // produces a word between "banana", "chisel", and "faucet".
  var secretWord = Math.random() * 3;
  var secretWordInteger = Math.floor(secretWord);
  var wordGeneratedInteger = secretWordInteger + 1;
  console.log("Your number is " + wordGeneratedInteger);

  // assign number to word
  if (wordGeneratedInteger == 1) {
    wordGenerated = "Banana";
  }

  if (wordGeneratedInteger == 2) {
    wordGenerated = "Chisel";
  }

  if (wordGeneratedInteger == 3) {
    wordGenerated = "Faucet";
  }
  // print word generated
  console.log("random word : " + wordGenerated);
  return wordGenerated;
};

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  console.log("your guess was : " + input);

  var randomWord = randomWordGenerator();
  console.log("The secret word was : " + randomWord);

  var myOutputValue = "You guessed wrong! Try again!";

  // Add extra if statement step to factor in the first win and tell them to guess again
  if (randomWord == input && numberOfWins == 0) {
    // add 1 for every new win
    numberOfWins = numberOfWins + 1;
    console.log("Number of wins :" + numberOfWins);
    myOutputValue =
      "You guessed " +
      input +
      ", but the word was " +
      randomWord +
      ", so you win the first one. Guess again!";
  }
  if (randomWord == input && numberOfWins == 2) {
    // add 1 for every new win
    numberOfWins = numberOfWins + 1;
    console.log("Number of wins :" + numberOfWins);
    myOutputValue =
      "You guessed " +
      input +
      ", but the word was " +
      randomWord +
      ", and you guessed correctly the last round too, so you win!";
  }

  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
