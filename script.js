document.body.style.backgroundColor = "#6a6a6a";
const selectionPool = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerSelection = '';
let playerWins = "You win!";
let computerWins = "You lose!";
let noOneWins = "It\'s a tie! Try again young padawan.";
let userScore = Number(document.getElementById('userScore').textContent);
let computerScore = Number(document.getElementById('computerScore').textContent);
const resultsText = document.getElementById('resultsText');


function getComputerChoice() {
   return selectionPool[Math.floor(Math.random() * selectionPool.length)];
}

//ROCKBUTTON rock is 0, paper is 1, scissors is 2
const userRock = document.getElementById('rock');
userRock.addEventListener('click', gameRock)
function gameRock() { 
    let computerSelection = getComputerChoice();
    if (computerSelection == selectionPool[0]) {
        return resultsText.textContent = noOneWins;
    } else if (computerSelection == selectionPool[1]) {
         resultsText.textContent = `${computerWins} Paper covers rock. I do not grant you the rank of Master.`;
         document.getElementById('computerScore').textContent = computerScore++ + 1;
    } else {
        resultsText.textContent = `${playerWins} Rock destroys scissors. Welcome to the Jedi Council, Master.`;
        document.getElementById('userScore').textContent = userScore++ + 1;
    }
}
//PAPERBUTTON rock is 0, paper is 1, scissors is 2
const userPaper = document.getElementById('paper');
userPaper.addEventListener('click', gamePaper)
function gamePaper() { 
    let computerSelection = getComputerChoice();
    if (computerSelection == selectionPool[0]) {
            resultsText.textContent = `${playerWins} Paper covers rock. Welcome to the Jedi Council, Master.`;
            document.getElementById('userScore').textContent = userScore++ + 1;
    } else if (computerSelection == selectionPool[1]) {
        return resultsText.textContent = noOneWins;
    } else {
        resultsText.textContent = `${computerWins} Scissors slices paper. I do not grant you the rank of Master.`;
        document.getElementById('computerScore').textContent = computerScore++ + 1;
    }
}
//SCISSORSBUTTON rock is 0, paper is 1, scissors is 2
const userScissors = document.getElementById('scissors');
userScissors.addEventListener('click', gameScissors)
function gameScissors() { 
    let computerSelection = getComputerChoice();
    if (computerSelection == selectionPool[0]) {
        resultsText.textContent = `${computerWins} Rock destroys scissors. I do not grant you the rank of Master.`;
        document.getElementById('computerScore').textContent = computerScore++ + 1;
    } else if (computerSelection == selectionPool[1]) {
         resultsText.textContent = `${playerWins} Scissors slices paper. Welcome to the Jedi Council, Master.`;
         document.getElementById('userScore').textContent = userScore++ + 1;
         
    } else return resultsText.textContent = noOneWins;
}
