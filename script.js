console.log("Hello world!");
console.log(getComputerChoice());
console.log(getHumanChoice());

function getComputerChoice() {
    var num = Math.random()
    if (num < 1/3) {
        return "rock";
    } else if (num < 2/3) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    var choice = "";
    choice = prompt("Please enter 'rock', 'paper', or 'scissors': ");
    choice.toLowerCase()
    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt("Invalid move. Please enter 'rock', 'paper', or 'scissors': ");
        choice.toLowerCase()
    }
    return choice;
}