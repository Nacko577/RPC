function getComputerChoice() {
    if (Math.random() < 0.33) 
        return "rock";
    else if (Math.random() < 0.66 && Math.random() >= 0.33)
        return "paper";
    else return "scissors"; 
}