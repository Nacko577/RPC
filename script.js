function getComputerChoice() {
    if (Math.random() < 0.33) 
        return "rock";
    else if (Math.random() < 0.66 && Math.random() >= 0.33)
        return "paper";
    else return "scissors"; 
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie!");
    }
    if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    if(humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie!");
    }
    if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    if(humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie!");
    }
}

playRound(getHumanChoice(), getComputerChoice());