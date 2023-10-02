const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");
const result = document.getElementById("result");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playButton = document.getElementById("play");

function getComputerChoice() {
  const computerRandomNumber = Math.floor(Math.random() * 3);
  return choices[computerRandomNumber];
}

function determineWinner(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    userScoreSpan.innerText = userScore;
    result.innerText = "You win!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    computerScore++;
    computerScoreSpan.innerText = computerScore;
    result.innerText = "Computer wins!";
  } else {
    result.innerText = "It's a tie!";
  }
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

rock.addEventListener("click", function () {
  playGame("rock");
});
paper.addEventListener("click", function () {
  playGame("paper");
});

scissors.addEventListener("click", function () {
  playGame("scissors");
});

playButton.addEventListener("click", function () {
  result.innerText = "";
});
