//create global variables: game mode, array for combined numbers, current player number, roll dice function
//display result
var combinedNumArray = [];
var playerRollArray = [];
var currentPlayer = 0;
var gameMode = `give instruction`;
console.log("game mode:" + gameMode);
var rollDice = function () {
  var randomNum = Math.floor(Math.random() * 6) + 1;
  return randomNum;
};
var main = function (input) {
  var myOutputValue = ``;
  //1st game mode is to provide instructions
  if (gameMode == `give instruction`) {
    gameMode = `roll dice`;
    console.log("game mode:" + gameMode);
    return `Welcome Player ${currentPlayer + 1}, type "roll" to begin.`;
  }
  //input "roll" to generate 2 dice rolls and changes game mode
  //rolls are shown on the browser and user is prompted to choose the dice order by input of "1" or "2"
  if (gameMode == `roll dice`) {
    if (input == `roll`) {
      var rollOne = rollDice();
      var rollTwo = rollDice();
      playerRollArray = [rollOne, rollTwo];
      console.log(`current player rolls array ` + playerRollArray);
      gameMode = `choose order`;
      console.log("game mode:" + gameMode);
      return `Dice 1: ${rollOne} <br> Dice 2: ${rollTwo} <br> Input "1" for Dice 1 to be the first number or input "2" for Dice 2 to be the first number.`;
    } else {
      return `Type "roll" to begin.`;
    }
  }
  //user inputs 1 and the combined number would start with 1st dice number
  //player's combined number would be displayed by accessing index, change of game mode
  //combined number is pushed into an array
  if (gameMode == `choose order`) {
    console.log(`current player: ` + currentPlayer);
    if (input == `1`) {
      var combinedNumber = Number(
        String(playerRollArray[0]) + String(playerRollArray[1])
      );
      console.log(`combined number` + combinedNumber);
      combinedNumArray.push(combinedNumber);
      console.log(`combined number array ` + combinedNumArray);
      gameMode = `roll dice`;
      //second player rolls and chooses dice order
      currentPlayer++;
      myOutputValue = `Your combined number is ${combinedNumber}. Player 2 type "roll" to begin.`;
    } else if (input == `2`) {
      var combinedNumber = Number(
        String(playerRollArray[1]) + String(playerRollArray[0])
      );
      console.log(`current player's combined number ` + combinedNumber);
      combinedNumArray.push(combinedNumber);
      console.log(`combined number array ` + combinedNumArray);
      gameMode = `roll dice`;
      //second player rolls and chooses dice order
      currentPlayer++;
      myOutputValue = `Your combined number is ${combinedNumber}. Player 2 type "roll" to begin.`;
    } else {
      myOutputValue = `Dice 1: ${playerRollArray[0]} <br> Dice 2: ${playerRollArray[1]} <br> Invalid input, only "1" or "2" is accepted.`;
    }
    //stops going to next player's input
    if (currentPlayer == 2) {
      //compare numbers
      if (combinedNumArray[0] > combinedNumArray[1]) {
        return `Player 1 (${combinedNumArray[0]}) beats Player 2 (${combinedNumArray[1]}).`;
      } else if (combinedNumArray[1] === combinedNumArray[0]) {
        return `Both players got ${combinedNumArray[0]}, it's a draw!`;
      } else {
        return `Player 2 (${combinedNumArray[1]}) beats Player 1 (${combinedNumArray[0]}).`;
      }
    }
    return myOutputValue;
  }
};
