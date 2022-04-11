// randomly roll a number from 1 - 3
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
// assign dice number to words to guess
var generateWords = function () {
  var generateNumber = rollDice();
  var SystemWord = "generate random words";
  if (generateNumber == 1) {
    SystemWord = "banana";
  } else if (generateNumber == 2) {
    SystemWord = "chisel";
  } else if (generateNumber == 3) {
    SystemWord = "faucet";
  }
  return SystemWord;
};
// Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
var correctCount = 2;

var secretWordBaseMain = function (input) {
  // define basic variables
  var myOutputValue = "choose one of the words: banana, chisel, faucet.";
  var secretWord = generateWords();
  console.log("The secret word is ", secretWord);
  // if input matches random word generated, deduct the count - 1.
  if (input == secretWord && correctCount != 0) {
    correctCount = correctCount - 1;
    myOutputValue =
      "Your guess is " +
      input +
      ". The secret word is " +
      secretWord +
      ". Still need the number of correct guesses: " +
      correctCount;
  }
  if (input == secretWord && correctCount == 0) {
    // when the count = 0, return you win and have guessed correctly twice in total
    myOutputValue =
      "Your guess is " +
      input +
      ". The secret word is " +
      secretWord +
      ". You have successfully guessed correctly twice and you won!";
  }
  // if input doesn't match the random word, return you didn't get the right word and try again.
  else if (input != secretWord) {
    myOutputValue =
      "Your guess is " +
      input +
      ". The secret word is " +
      secretWord +
      ". you did not guess the right word and try again! Still need the number of correct guesses: " +
      correctCount;
  }
  return myOutputValue;
};
// Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
var secretWordTwiceRowMain = function (input) {
  // define basic variables
  var myOutputValue = "choose one of three words: banana, chisel, faucet.";
  var secretWordTwice = generateWords();
  console.log(secretWordTwice);
  // if input matches generated word, correct count - 1
  if (input == secretWordTwice && correctCount != 0) {
    myOutputValue =
      "You have guessed " +
      input +
      ". The secret word is " +
      secretWordTwice +
      ". You guessed correctly once and good luck for your next guess!";
    correctCount = correctCount - 1;
  }
  // if input doesn't match generated word, correct count = 2
  else if (input != secretWordTwice && correctCount != 0) {
    myOutputValue =
      "You have guessed " +
      input +
      ". The secret word is " +
      secretWordTwice +
      ". You guessed wrongly and try again!";
    correctCount = 2;
  }
  // if correct count = 0, return you guessed correctly in a row and you win!
  if (correctCount == 0) {
    myOutputValue =
      "You have guessed " +
      input +
      ". The secret word is " +
      secretWordTwice +
      ". You have guessed correctly twice in a row and you won!";
  }
  return myOutputValue;
};

// Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
// random number of times a player needs to win
var gameNumber = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 2 ... add 2
  var diceNumber = randomInteger + 2;

  return diceNumber;
};

var guessCorrectNumber = gameNumber();
var returnToOriginal = guessCorrectNumber;
var secretWordXRowMain = function (input) {
  // define basic variables
  var myOutputValue =
    "Total correct guess for this round: " + returnToOriginal + ". ";
  var secretWordInARow = generateWords();
  console.log(secretWordInARow);
  // if input matches the word generated, correct count - 1;
  if (input == secretWordInARow && guessCorrectNumber != 0) {
    guessCorrectNumber = guessCorrectNumber - 1;
    myOutputValue +=
      "You have guessed " +
      input +
      ". The secret word is " +
      secretWordInARow +
      ". Good luck on your next guess!" +
      " Still need correct guesses: " +
      guessCorrectNumber +
      ".";
    console.log(guessCorrectNumber);
  }
  // if input doesn't match the word generated, correct count returns to guesscorrectnumber.
  else if (input != secretWordInARow && guessCorrectNumber != 0) {
    guessCorrectNumber = returnToOriginal;
    myOutputValue +=
      "You have guessed " +
      input +
      ". The secret word is " +
      secretWordInARow +
      ". Wrong guess and try again!" +
      " Still need correct guesses: " +
      guessCorrectNumber +
      ".";
    console.log(guessCorrectNumber);
  }
  // if correct count = 0, return you won and reset guess correct number for next round.
  if (guessCorrectNumber == 0) {
    myOutputValue =
      "you have guessed " +
      input +
      ". The secret word is " +
      secretWordInARow +
      ". You have guessed correctly with below number of guesses: " +
      returnToOriginal +
      ". You have won! ";
    guessCorrectNumber = gameNumber();
    console.log(guessCorrectNumber);
    returnToOriginal = guessCorrectNumber;
    myOutputValue +=
      "For next round, you need the below number of correct guesses to win: " +
      returnToOriginal +
      ". Good luck!";
  }
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
