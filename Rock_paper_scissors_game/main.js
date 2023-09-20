/* Implement “play” function that is a “Rock, paper, scissors” game.
Implementations notes:
Create an array with all the possibilities (rock, paper, scissors);
Pick a random option for Computer ( use Math.random);
Pick a random option for User ( use Math.random);
Apply game rules for both options (use if/else if structures)
Calling “play()” function will display in console something like this:
Computer choice: “Rock”
User choice: “Paper”
User wins!   */

// the rules:
//  rock beats scissors
//  paper beats rock
//  scissors beats paper

const choices = ["rock", "paper", "scissors"];

function play() {
  const computerRandomNumber = Math.floor(Math.random() * 3);
  const userRandomNumber = Math.floor(Math.random() * 3);

  const computerChoice = choices[computerRandomNumber];
  const userChoice = choices[userRandomNumber];

  if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    console.log("Computer wins");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("User wins");
  } else if (computerChoice === userChoice) {
    console.log("It`s a tie");
  }
}

play();
