var Result = ``;
var main = function (user) {
  var ComGuess = Math.floor(Math.random() * 3);
  if (ComGuess == 0) {
    ComGuess = `Scissors`;
  } else if (ComGuess == 1) {
    ComGuess = `Paper`;
  } else {
    ComGuess = `Stone`;
  }

  if (user === ComGuess) {
    Result = `Your guess is ${user} and computer guess is ${ComGuess}. It is a draw`;
  } else if (
    (user === "Stone" && ComGuess === `Paper`) ||
    (user === "Scissors" && ComGuess === `Stone`) ||
    (user === "Paper" && ComGuess === `Scissors`)
  ) {
    Result = `Your guess is ${user} and computer guess is ${ComGuess}. User loses.`;
  } else {
    Result = `Your guess is ${user} and computer guess is ${ComGuess}. User wins.`;
  }

  return Result;
};
