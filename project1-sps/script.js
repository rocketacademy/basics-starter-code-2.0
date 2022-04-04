var wins = 0;
var totalGames = 0;

var main = function (input) {
  //input is either rock, paper or scissors
  //computer randomly generates either rock, paper or scissors
  //generate random num 0,1 or 2
  var generateNum = function () {
    var computerRoll = Math.floor(Math.random() * 3);
    return computerRoll;
  };
  //assign comp roll to a variable
  var randomInteger = generateNum();
  var computerObject = ``;
  //assign 0 = rock
  if (randomInteger == 0) {
    computerObject = `rock`;
  }
  //1 = paper
  if (randomInteger == 1) {
    computerObject = `paper`;
  }
  //2 = scissors
  if (randomInteger == 2) {
    computerObject = `scissors`;
  }
  console.log(computerObject);
  var myOutputValue = ``;
  // if input = computer gen --> draw
  if (input == computerObject) {
    myOutputValue = `It's a draw!`;
  }
  // if input= rock and computer gen = scissors ---> win
  //if input = scissors, comp = paper --> win
  //if input = paper, comp = rock --> win
  else if (
    (input == `rock` && computerObject == `scissors`) ||
    (input == `scissors` && computerObject == `paper`) ||
    (input == `paper` && computerObject == `rock`)
  ) {
    wins = wins + 1;
    myOutputValue = `You Win!`;
  }
  //if input = rock and computer gen = paper --> lose
  //if in put = scissors, comp = rock --> lose
  //if input = paper, comp = scissors --> lose
  else if (
    (input == `rock` && computerObject == `paper`) ||
    (input == `scissors` && computerObject == `rock`) ||
    (input == `paper` && computerObject == `scissors`)
  ) {
    myOutputValue = `You lost, try again!`;
  }
  //I included the else condition here instead of using it as a default message so that the win loss ratio is not affected by a wrong input
  else {
    return `Input only "rock", "paper" or "scissors".`;
  }
  totalGames = totalGames + 1;
  return `${myOutputValue} Your current win to loss ratio is ${wins} / ${totalGames}. `;
};
