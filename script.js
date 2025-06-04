const selectButtons = document.querySelectorAll("#select-buttons");
const resultsDiv = document.querySelector("#results");

const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");

const roundWinnerMsg = document.createElement("p");
const winnerMsg = document.createElement("p");
const replayButton = document.createElement("button");
replayButton.textContent = "Replay";

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

    // Once clicked, user selection buttons are the ones that trigger every round played.
    selectButtons.forEach((button) => {
        button.addEventListener(
            "click",
            (e) => {
                if (humanScore < 5 && computerScore < 5) {
                    const humanChoice = e.target.id;
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
                            roundWinnerMsg.textContent = "It's a tie!";
                            break;
                    }
                    resultsDiv.prepend(roundWinnerMsg);
                }
                if (humanScore === 5 || computerScore === 5) {
                    let winner = humanScore > computerScore ? "Human" : "Computer";
                    winnerMsg.textContent = `${winner} is the new World Champion! The absolute GOAT!`;
                    winnerMsg.style.fontStyle = "italic";
                    winnerMsg.style.fontWeight = "bold";

                    resultsDiv.appendChild(winnerMsg);
                    resultsDiv.appendChild(replayButton);
                }
            }
        )
    });

    // The replay button is shown and can be used only after one full game is played.
    replayButton.addEventListener(
        "click",
        () => {
            humanScore = 0;
            computerScore = 0;
            cleanResults();
        }
    );
}

function cleanResults() {
    computerScoreSpan.textContent = 0;
    humanScoreSpan.textContent = 0;
    resultsDiv.removeChild(roundWinnerMsg);
    resultsDiv.removeChild(winnerMsg);
}

playGame();