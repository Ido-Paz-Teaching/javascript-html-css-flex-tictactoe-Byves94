
/*
enter code to handle:
1. User cell selection click
2. game status update messages
3. Start button click
*/
const selectionArray = [];
const maxturns = 10;

let players;
let turns;

window.onload = load;
function load() {

    startButton = document.querySelector('header button');
    startButton.addEventListener('click', startGame);
    selectionArray[0] = document.getElementById('b0');
    selectionArray[1] = document.getElementById('b1');
    selectionArray[2] = document.getElementById('b2');
    selectionArray[3] = document.getElementById('b3');
    selectionArray[4] = document.getElementById('b4');
    selectionArray[5] = document.getElementById('b5');
    selectionArray[6] = document.getElementById('b6');
    selectionArray[7] = document.getElementById('b7');
    selectionArray[8] = document.getElementById('b8');
    gameStatus = document.getElementById('gameStatusTag');
    gameStatus.innerHTML = 'Waiting for you to start! (Press \'start\')';

}

function startGame() {
    b0.addEventListener('click', userCellSelection);
    b1.addEventListener('click', userCellSelection);
    b2.addEventListener('click', userCellSelection);
    b3.addEventListener('click', userCellSelection);
    b4.addEventListener('click', userCellSelection);
    b5.addEventListener('click', userCellSelection);
    b6.addEventListener('click', userCellSelection);
    b7.addEventListener('click', userCellSelection);
    b8.addEventListener('click', userCellSelection);
    turns = 1;
    players = 'X';
    gameStatus.innerHTML = 'X goes first!';
    for (let i = 0; i < 9; i++) {
        selectionArray[i] = document.getElementById('b' + i.toString());
        selectionArray[i].innerHTML = ' ';
        selectionArray[i].disabled = false;
    }
}

function userCellSelection(b) {
    let cellSelect = b.currentTarget;
    if (cellSelect.innerHTML === selectionArray[Number(cellSelect.id[1])] || cellSelect.innerHTML === selectionArray[Number(cellSelect.id[1])]) {
        return null;
    }
    else if (players === 'X') {
        cellSelect.innerHTML = 'X';
        selectionArray[Number(cellSelect.id[1])] = 'X';
        turns++;
        players = 'O';
        gameStatusTag();
        endGame();
    }
    else if (players === 'O') {
        cellSelect.innerHTML = 'O';
        selectionArray[Number(cellSelect.id[1])] = 'O';
        turns++;
        players = 'X';
        gameStatusTag();
        endGame();
    }
}

function gameStatusTag() {
    if (players === 'X' && !endGame()) {
        gameStatus.innerHTML = 'X\'s turn';
    }
    else if (players === 'O' && !endGame()) {
        gameStatus.innerHTML = 'O\'s turn';
    }
    else if (hasWon(selectionArray)) {
        endGame();
        if (players === 'O')
        gameStatus.innerHTML = 'X has won!';
        else if (players === 'X')
        gameStatus.innerHTML = 'O has won!';
    }
    else if (hasDraw(selectionArray)) {
        endGame();
        gameStatus.innerHTML = 'It\'s a draw!';
    }
}

function endGame() {
    if (hasWon(selectionArray) || hasDraw(selectionArray)) {
        for (i = 0; i < 9; i++) {
            selectionArray[i].disabled = true;
        }
        return true;
    }
    return false;
}