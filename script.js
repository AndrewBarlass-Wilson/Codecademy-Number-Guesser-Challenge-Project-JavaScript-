let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.ceil(Math.random() * 10);
}
function compareGuesses(user, computer, target) {
    if (user > 9 || user < 0) {alert('value out of range!')}
    if (Math.abs(target - computer) < Math.abs(target - user)) {
        return false;
    }
    else {
        return true;
    }
}
function updateScore(winner) {
    if (winner === 'human') { humanScore++; }
    if (winner === 'computer') { computerScore++; }
}

function advanceRound() {
    currentRoundNumber++;
}