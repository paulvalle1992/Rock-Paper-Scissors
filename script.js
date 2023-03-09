document.body.style.backgroundColor = "#6a6a6a";
const selectionPool = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerWins = "You win!";
let computerWins = "You lose!";
let noOneWins = "It\'s a tie!";

function getComputerChoice() {
   return selectionPool[Math.floor(Math.random() * selectionPool.length)];
}
// //rock is 0, paper is 1, scissors is 2
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === selectionPool[0] && computerSelection === selectionPool[2]) {
//         return `${playerWins} Rock beats scissors!!`;
//     }
//     else if (playerSelection === selectionPool[1] && computerSelection === selectionPool[0]) {
//         return `${playerWins} Paper beats rock!!`;
//     }
//     else if (playerSelection === selectionPool[2] && computerSelection === selectionPool[1]) {
//         return `${playerWins} Scissors beats paper!!`;
//     }
//     else if (playerSelection === computerSelection) {
//         return `${noOneWins} Try again. :)`;
//     }
//     else return  `${computerWins} Try again. :(`;
//   }
const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', game);
});

function game(e) { 
    if (e.target.classList.contains('btn')) {
        for (i = 0; i < 5; i++) {
            console.log(i);
            }
        }
}

let userScore = Number(document.getElementById('userScore').textContent);
let computerScore = Number(document.getElementById('computerScore').textContent);



