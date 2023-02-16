function getComputerChoice() {
    const selectionPool = ["rock", "paper", "scissors"];
  return selectionPool[Math.floor(Math.random() * selectionPool.length)];
 }
let computerSelection = getComputerChoice()


let userSubmit = prompt("Play rock, paper, scissors vs a robot! First to 5 wins!");
   if (userSubmit.toLowerCase() === "rock") {
   userSelection = "rock";
 } else if (userSubmit.toLowercase() === "paper") {
   userSelection = "paper";
 } else if (userSubmit.toLowerCase() === "scissors") {
   userSelection = "scissors";
 }

 let playerSelection = userSelection;

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats scissors, you win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats rock, you win!!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper, you win!!";
    }
    else if (playerSelection === computerSelection) {
        return "It's a tie!!! Try again! :)";
    }
    else return "You lose! Try again! :(";
 }