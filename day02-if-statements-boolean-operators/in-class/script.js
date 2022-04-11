var lucky11Main = function (guess) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var dice_1 = rollDice();
  var dice_2 = rollDice();
  var sum_dice = dice_1 + dice_2;

  if (dice_1 == guess || dice_2 == guess || sum_dice == 11) {
    return "You have won!";
  } 
  else {
    var myOutputValue = "You have lost";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (dish) {
// Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
if (var  == 'chicken rice'||'nasi lemak'){
    return "That is a rice dish."
  } else if (var == 'laksa'||'hokkien mee'){
    return "That is a noodle dish."
  } else if (var == 'bak kut teh'||'roti prata') {
    return "That dish is neither a rice nor noodle dish."
  };

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = 'hello world';
  return myOutputValue;
};
