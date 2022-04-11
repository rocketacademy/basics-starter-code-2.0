var main = function (playerChoice) {
  var computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = "scissors";
  } else if (computerChoice === 2) {
    computerChoice = "paper ";
  } else if (computerChoice === 3) {
    computerChoice = "stone";
  }

  if (
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "stone") ||
    (playerChoice === "stone" && computerChoice === "scissors")
  ) {
    return `You win! <br>
    You played ${playerChoice} and the computer played ${computerChoice}. <br><br>
    Type 'scissors', 'paper', or 'stone' to play another round.`;
  } else if (playerChoice === computerChoice) {
    return `It's a draw. <br>
    You played You played ${playerChoice} and the computer played ${computerChoice}. <br><br>
    Type 'scissors', 'paper', or 'stone' to play another round.`;
  } else if (
    (playerChoice === "scissors" && computerChoice === "stone") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "stone") & (computerChoice === "paper")
  ) {
    return `You lose! <br>
    You played ${playerChoice} and the computer played ${computerChoice}. <br><br>
    Type 'scissors', 'paper', or 'stone' to play another round.`;
  } else if (
    playerChoice !== "scissors" ||
    playerChoice !== "paper" ||
    playerChoice !== "stone"
  ) {
    return `'${playerChoice}' is not a valid move. <br><br>
      Please type 'scissors', 'paper', or 'stone' to play the game.`;
  }
};
