var score = 0;
var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  //Generate a random 3 output variables
  var randomOutput = Math.ceil(Math.random() * 3);
  console.log(randomOutput);
  var comp = "";
  if (randomOutput == 1) {
    comp = "banana";
  }
  if (randomOutput == 2) {
    comp = "chisel";
  }
  if (randomOutput == 3) {
    comp = "faucet";
  }
  console.log(comp);
  var myOutputValue = "Haha";
  // comparison on the input vs the computer output
  if (input == comp) {
    console.log("== comp");
    score = score + 1;
    if (score == 2) {
      console.log("score == 2");
      myOutputValue = "You win!";
      return myOutputValue;
    }
    console.log("score is" + score);
    var myOutputValue = "You got it right once, one more time!";
    return myOutputValue;
  } else if (input != comp) {
    console.log("not == comp");
    console.log("score is" + score);
    myOutputValue = "Try again! , the answer is " + comp;
    return myOutputValue;
  }
  console.log(score);
};
//To win, you need to guess correctly twice in a row.
