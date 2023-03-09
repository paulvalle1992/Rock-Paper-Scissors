document.body.style.backgroundColor = "#6a6a6a";

const selectionPool = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return selectionPool[Math.floor(Math.random() * selectionPool.length)];
 };

let computerSelection = getComputerChoice();

 let playerWins = "You win!";
 let computerWins = "You lose!";
 let noOneWins = "It\'s a tie!";

//rock is 0, paper is 1, scissors is 2

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === selectionPool[0] && computerSelection === selectionPool[2]) {
        return `${playerWins} Rock beats scissors!!`;
    }
    else if (playerSelection === selectionPool[1] && computerSelection === selectionPool[0]) {
        return `${playerWins} Paper beats rock!!`;
    }
    else if (playerSelection === selectionPool[2] && computerSelection === selectionPool[1]) {
        return `${playerWins} Scissors beats paper!!`;
    }
    else if (playerSelection === computerSelection) {
        return `${noOneWins} Try again. :)`;
    }
    else return  `${computerWins} Try again. :(`;
  }

//   function game() { 
//     for (i = 0; i < 5; i++) {
//         let computerSelection = getComputerChoice();
//     let playerSelection = prompt("Play rock, paper, scissors vs a robot! First to 5 wins!").toLowerCase();
//        if (playerSelection === selectionPool[0] || playerSelection === selectionPool[1] || playerSelection === selectionPool[2]) {
//         console.log(playRound(playerSelection, computerSelection));    
//        }
//       else {
//        return alert("Only works if putting rock, paper or scissors.");
//       } 
//      }
//    }

// game();
