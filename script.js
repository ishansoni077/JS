const score = {
    wins: 0,
    loses: 0,
    ties: 0
}

updateMove();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.loses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }
    
    updateMove();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You ${playerMove} - Computer ${computerMove}`;

}

function updateMove(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNo = Math.random();

    let computerMove = '';

    if (randomNo >= 0 && randomNo < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNo >= 1 / 3 && randomNo < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNo >= 2 / 3 && randomNo < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}