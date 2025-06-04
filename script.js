

const resultsDiv = document.querySelector("#results");
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");
const roundWinnerMsg = document.createElement("p");
const winnerMsg = document.createElement("p");


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

    // while (humanScore < 5 && computerScore < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    let roundWinner = playRound(humanChoice, computerChoice);
    switch (roundWinner) {
        case "computer":
            computerScore++;
            computerScoreSpan.textContent = computerScore;
            roundWinnerMsg.textContent = "Computer wins this round.";
            break;
        case "human":
            humanScore++;
            humanScoreSpan.textContent = humanScore;
            roundWinnerMsg.textContent = "Human wins this round.";
            break;
        default:
            console.log("It's a tie!");
            break;
    }
    resultsDiv.prepend(roundWinnerMsg);
    // }

    winner = humanScore > computerScore ? "Human" : "Computer";
    winnerMsg.textContent = `${winner} is the new World Champion!! The absolute GOAT!`;

    resultsDiv.appendChild(winnerMsg);
}

playGame();