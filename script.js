function getComputerChoice() {
    const selectionPool = ["rock", "paper", "scissors"];
  return selectionPool[Math.floor(Math.random() * selectionPool.length)];
 }
let computerSelection = getComputerChoice()

 function playRound(playerSelection, computerSelection)
