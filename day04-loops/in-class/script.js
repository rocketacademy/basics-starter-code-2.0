var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue;
  var counter = 0;
  while (counter < input) {
    // print emoji input number of times.
    // Increment the counter by 1 at the end of each loop iteration.
    myOutputValue = myOutputValue + "👍";
    counter = counter + 1;
  }
  return myOutputValue;
};
//return USUALLY exits function. MAYBE exits conditionals sometimes

var emojiSquareMain = function (input) {
  var myOutputValue = "";

  // Initialise the outer counter, rowCounter
  var rowCounter = 1;

  while (rowCounter <= input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 1;
    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop conditi1on is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "👍";
      columnCounter = columnCounter + 1;
    }
    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }
  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  var myOutputValue = "";
  for (var column = 0; column < input; column += 1) {
    // The 'column' loop runs input number of times
    for (var row = 0; row <= column; row += 3) {
      //WHY MUST BE <=? Why cannot be ==???
      //Because, inner loop (in this case, your var row) will always start from 0! That's why you need <=.
      // The 'row' loop runs input number of time each then 'column' increments
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "👍";
      console.log("row :", row);
    }
    // At the end of each 'column' loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    console.log("column :", column);
  }
  // After the outer loop has run to completion, return the output compiled by the above loops.
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  //outer loop counter = 0 and input - 1 will be 👍
  //inner loop counter = 0 and input - 1 will be 👍
  //rest will be default emoji ❤️
  //need nested if condition in loops
  var firstRow = "";
  var firstRowCounter = 0;
  while (firstRowCounter < input) {
    firstRow = firstRow + "👍";
    firstRowCounter = firstRowCounter + 1;
  }
  return firstRow;
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
