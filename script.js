function getComputerChoice() {
    const selectionPool = ["rock", "paper", "scissors"];
  return selectionPool[Math.floor(Math.random() * selectionPool.length)];
 }
let computerSelection = getComputerChoice()

let userSubmit = prompt("Play rock, paper, scissors vs a robot! First to 5 wins!");
   if (userSubmit.toLowerCase() === "rock") {
   userSelection = "rock";
 } else if (userSubmit.toLowerCase() === "paper") {
   userSelection = "paper";
 } else if (userSubmit.toLowerCase() === "scissors") {
   userSelection = "scissors";
 }

 let playerSelection = userSelection;
 let playerWins = "You win!";
 let computerWins = "You lose!";
 let noOneWins = "It\'s a tie!";

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return `${playerWins} Rock beats scissors!!`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return `${playerWins} Paper beats rock!!`;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `${playerWins} Scissors beats paper!!`;
    }
    else if (playerSelection === computerSelection) {
        return `${noOneWins} Try again. :)`;
    }
    else return  `${computerWins} Try again. :(`;
    
 }

 function game() {
  for (let i = 0; i <= 5; i++) {
  let roundResult = playRound(playerSelection, computerSelection);
  }
   

 
 