function getComputerChoice() {
    let computerChoice;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Choose!").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    // Tie
    if (humanChoice == computerChoice) return "tie";
    // Human losing conditions, otherwise wins
    // Rock loses to paper, paper loses to scissors, scissors lose to rock
    if (
        humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scissors"
        || humanChoice == "scissors" && computerChoice == "rock"
    ) return "computer";
    else return "human";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner;

    while (humanScore < 5 && computerScore < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let roundWinner = playRound(humanChoice, computerChoice);
        switch (roundWinner) {
            case "computer":
                computerScore++;
                console.log("Computer wins this round.");
                break;
            case "human":
                humanScore++;
                console.log("Human wins this round.");
                break;
            default:
                console.log("It's a tie!");
                break;
        }
    }
    console.log(
        `Human score -> ${humanScore} Computer score -> ${computerScore}`
    );

    winner = humanScore > computerScore ? "Human" : "Computer";
    console.log(`${winner} is the new World Champion!! The absolute GOAT!`);
}

playGame();