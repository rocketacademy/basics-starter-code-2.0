var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  // define basic variables
  var counter = 0;
  var myOutputValue = " ";

  // while loop
  while (counter < input) {
    myOutputValue += "👍🏻 👍🏻 👍🏻 👍🏻 <br>";
    counter += 1;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  // define basic variables
  var outerLoop = 0;
  var myOutputValue = " ";
  // while outer loop for x times
  while (outerLoop < input) {
    // while inner loop for <= outer loop time
    var innerLoop = 0;
    while (innerLoop <= outerLoop) {
      myOutputValue = myOutputValue + "👍🏻 ";
      innerLoop += 1;
    }
    myOutputValue = myOutputValue + "<br>";
    outerLoop += 1;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  // define basic variables
  var outerSquare = 0;
  var myOutputValue = " ";
  // while loop - outer square
  while (outerSquare < input) {
    var innerSquare = 0;
    while (innerSquare < input) {
      if (
        outerSquare == 0 ||
        outerSquare == input - 1 ||
        innerSquare == 0 ||
        innerSquare == input - 1
      ) {
        myOutputValue = myOutputValue + "✊";
      } else {
        // inner square
        myOutputValue = myOutputValue + "👍";
      }
      innerSquare += 1;
    }
    myOutputValue = myOutputValue + "<br>";
    outerSquare += 1;
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  // define basic variables
  var outerSquare = 0;
  var myOutputValue = " ";
  var centerPoint = 0;
  // while loop for outer square, to define number of rows
  if (input % 2 == 0) {
    myOutputValue = "This is an invalid input.<br> Please enter an odd number.";
  } else if (input % 2 == 1) {
    centerPoint = (input - 1) / 2;
    while (outerSquare < input) {
      var innerSquare = 0;
      // while loop for inner square, to define number of emojis each row and what emoji
      while (innerSquare < input) {
        if (
          outerSquare == 0 ||
          innerSquare == 0 ||
          outerSquare == input - 1 ||
          innerSquare == input - 1
        ) {
          myOutputValue = myOutputValue + "🌞";
          innerSquare += 1;
          // when input is an odd number
        } else if (innerSquare == outerSquare && innerSquare == centerPoint) {
          myOutputValue = myOutputValue + "🐰";
          innerSquare += 1;
        } else {
          myOutputValue = myOutputValue + "🌱";
          innerSquare += 1;
        }
      }
      outerSquare += 1;
      myOutputValue = myOutputValue + "<br>";
    }
  }
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
