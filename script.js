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