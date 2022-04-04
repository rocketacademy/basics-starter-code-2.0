var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "Not a food item.";
  if (input == `laksa` || input == `fried kuay teow`) {
    myOutputValue = `Noodle`;
  }
  if (input == `nasi lemak` || input == `bak kut teh`) {
    myOutputValue = `Rice`;
  }
  if (input == `prata`) {
    myOutputValue = `Others`;
  }
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var generateNum = function () {
    var randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  };
  var NumOne = generateNum();
  var NumTwo = generateNum();
  var NumThree = generateNum();
  var NumFour = generateNum();
  var myOutputValue = ``;
  if (
    input == NumOne ||
    input == NumTwo ||
    input == NumThree ||
    input == NumFour
  ) {
    myOutputValue = `You win!`;
  } else {
    myOutputValue = `You Lose...`;
  }
  var result = `${myOutputValue}  Your input is ${input} and the numbers are ${NumOne}, ${NumTwo}, ${NumThree} and ${NumFour}.`;
  return result;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
