var humanScore = 0;
var computerScore = 0;

playGame();

function playGame() {
    for (var i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`You win with ${humanScore} point(s) against the computer with ${computerScore} point(s)!`);
    } else if (humanScore < computerScore) {
        console.log(`You lose with ${humanScore} point(s) against the computer with ${computerScore} point(s)!`);
    } else {
        console.log(`You and the computer draw with ${humanScore} point(s) each!`);
    }
}

function playRound(humanChoice, computerChoice) {
    var result = ""
    if (humanChoice === computerChoice) {
        result = "Draw! Both of you played " + capitalizeFirstLetter(humanChoice);
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') 
    || (humanChoice === 'paper' && computerChoice === 'scissors')
    || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        result = "You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice);
        computerScore++;
    } else {
        result = "You win! " + capitalizeFirstLetter(humanChoice) + " beats " + capitalizeFirstLetter(computerChoice);
        humanScore++;
    }
    console.log(result)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    choice = choice.toLowerCase()
    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt("Invalid move. Please enter 'rock', 'paper', or 'scissors': ");
        choice = choice.toLowerCase()
    }
    return choice;
}