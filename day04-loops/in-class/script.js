var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";
  for (var counter = 0; counter < input; counter += 1) {
    myOutputValue = myOutputValue + "😊";
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = " ";
  for (var rowcounter = 0; rowcounter < input; rowcounter += 1) {
    for (var colcounter = 0; colcounter < input; colcounter += 1) {
      myOutputValue = myOutputValue + "😊";
    }
    myOutputValue = myOutputValue + "<br>";
  }

  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  var myOutputValue = " ";
  for (var rowcounter = 0; rowcounter < input; rowcounter += 1) {
    for (var colcounter = 0; colcounter < rowcounter; colcounter += 1) {
      myOutputValue = myOutputValue + "😊";
    }
    myOutputValue = myOutputValue + "😊" + "<br>";
  }

  return myOutputValue;
};

// Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
//var myOutputValue = "hello world";
//return myOutputValue;

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
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
