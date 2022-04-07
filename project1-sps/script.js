//Default output
var myOutputValue = `Hello World`;
//get auto generated Computer move
var main = function (player) {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomNum = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 3 inclusive.
  var randomRound = Math.floor(randomNum);
  // Add 1 to get valid result of 1 through 3 inclusive.
  var comMove = randomRound + 1;
  if (comMove == 1) {
    comMove = `Scissor`;
  } else if (comMove == 2) {
    comMove = `Paper`;
  } else {
    comMove = `Stone`;
  }

  //Logic on Cases
  if (comMove === player) {
    myOutputValue = `You choose ${player} ! AI choose ${comMove} ! It is a draw! `;
  } else if (
    (player === `Scissor` && comMove === `Paper`) ||
    (player === `Paper` && comMove === `Stone`) ||
    (player === `Stone` && comMove === `Scissor`)
  ) {
    myOutputValue = `You choose ${player} ! AI choose ${comMove} ! You Win! `;
  } else {
    myOutputValue = `You choose ${player} ! AI choose ${comMove} ! You Lose! `;
  }
  return myOutputValue;
};

// var main = function (input) {
//   // Generate a random move
//   var randomComMove = computerMove();
//   //give them a name
//   var labels = {
//     1: "scissor",
//     2: "paper",
//     3: "stone"
//   };

//testing cases ,
// 1 > 2 Win
// 1 < 3 Lose

// 2 >3 Win
// 2 <1 Lose

// 3 > 1 Win
// 3 <2 Lost
