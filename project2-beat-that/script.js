//2 players and players take turns
//when a player clicks submits, the game rolls 2 dice and show the dice rolls
// player picks the order 1 or 2 to get the highest number
//after both players rolls, player with higher combined number wins

//== breakdown and planning==//
// 1. roll 2 dice and turn the outputs for 1 player. Player choose the dice order and get the correct return output
//2. include player 2
//3. implement comparing score and declare winner
//4. reset the game so the player can play without refresh browser page

//Global Variable (type in CAPS will not change)
var GAME_DICE_ROLL = `GAME_DICE_ROLL`;
var GAME_DICE_ORDER = `GAME_DICE_ORDER`;
var gameState = GAME_DICE_ROLL;

//store dice value for player
var playerRolls = [];

//Helper Function
var rollDice = function () {
  console.log("Control flow: start of rollDice()");
  //random decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  //random interger from 1 to 6
  var randomInteger = Math.floor(randomDecimal) + 1;

  console.log(`rollDice ouput randomInteger:`, randomInteger);
  return randomInteger;
};

var rollDiceForPlayer = function () {
  console.log(`Control flow: start of rollDiceForPlayer()`);
  var counter = 0;
  while (counter < 2) {
    //array to store the dice number
    playerRolls.push(rollDice());
    counter = counter + 1;
  }
  console.log(`rollDiceForPlayer changes, playerRolls: `, playerRolls);
  return (
    "Hey<br><br> You rolled:>br> Dice 1:" +
    playerRolls[0] +
    " | Dice 2: " +
    playerRolls[1] +
    ". <br><br> Please input either `1` or `2` to choose your final value"
  );
};

var main = function (input) {
  console.log(`Checking game state on submit click:`, gameState);
  var outputMessage = ``;
  //return outputMessage;
  //};

  if (gameState == GAME_DICE_ROLL) {
    console.log(`Control flow: gameState == GAME_DICE_ROLL`);

    //display dice rolled as output message
    outputMessage = rollDiceForPlayer();

    //change the game state
    gameState = GAME_DICE_ORDER;
  }

  if (gameState == GAME_DICE_ORDER) {
    console.log(`Control flow: gameState == GAME_DICE_ORDER`);

    //input validation
    if (input != 1 && input != 2) {
      console.log(`Control flow: input validation, input is NOT 1 and NOT 2`);
      return (
        "Error! Please only input `1` or `2` to choose which dice to use as your first digit. <br> <br> Your dice rolls are: <br> Dice 1: " +
        playerRolls[0] +
        " | Dice 2: " +
        playerRolls[1] +
        "."
      );
    }

    //input ==1
    if (input == 1) {
      console.log(`Control flow: input ==1`);
      var playerScore = Number(String(playerRolls[0]) + String(playerRolls[1]));
      return "Your chosen value is: " + playerScore;
    }

    //input ==2
    if (input == 2) {
      console.log(`Control flow: input ==2`);
      var playerScore = Number(String(playerRolls[1]) + String(playerRolls[0]));
      return "Your chose value is: " + playerScore;
    }
  }

  return outputMessage;
};
