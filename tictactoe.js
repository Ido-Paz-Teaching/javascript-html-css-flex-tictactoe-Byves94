//Cells winning (horizontally || Vertically || diagonally) options:
///////////////['0','1','2','3','4','5','6','7','8'];
//Horizontally1['x','x','x',' ',' ',' ',' ',' ',' '];
//Horizontally2[' ',' ',' ','x','x','x',' ',' ',' '];
//Horizontally3[' ',' ',' ',' ',' ',' ','x','x','x'];
//
////Vertically1['x',' ',' ','x',' ',' ','x',' ',' '];
////Vertically2[' ','x',' ',' ','x',' ',' ','x',' '];
////Vertically3[' ',' ','x',' ',' ','x',' ',' ','x'];
//
////Diagonally1['x',' ',' ',' ','x',' ',' ',' ','x'];
////Diagonally2[' ',' ','x',' ','x',' ','x',' ',' '];
//
//recieve a string array parameter and return true
//if the game is a draw or false if not.
function horizontally(selectionArray) {
    for (let i = 0; i < 7; i += 3) {
        if (selectionArray[i] === selectionArray[i + 1] && selectionArray[i] === selectionArray[i + 2] && selectionArray[i] !== ' ' && selectionArray[i] !== undefined)
            return true;
    }
    return false;
}
function vertically(selectionArray) {
    for (let i = 0; i < 3; i++) {
        if (selectionArray[i] === selectionArray[i + 3] && selectionArray[i] === selectionArray[i + 6] && selectionArray[i] !== ' ' && selectionArray[i] !== undefined)
            return true;
    }
    return false;
}
function diagonally(selectionArray) {
    if (selectionArray[0] === selectionArray[4] && selectionArray[0] === selectionArray[8] && selectionArray[0] !== undefined) {
        return true;
    }
    else if (selectionArray[2] === selectionArray[4] && selectionArray[2] === selectionArray[6] && selectionArray !== undefined) {
        return true;
    }
    return false;
}
function fullBoard(selectionArray) {
    for (i = 0; i < 9; i++) {
       if (selectionArray[i].innerHTML === ' ')
        return false;
    }
    return true;
}

function hasDraw(selectionArray) {
    if (!hasWon(selectionArray) && fullBoard(selectionArray)) {
        return true;
    }
    return false;
}
//recieve a string array parameter and return true 
//if someone won the game or false if not.
function hasWon(selectionArray) {
    if (horizontally(selectionArray) || vertically(selectionArray) || diagonally(selectionArray)) {
        return true;
    }
    return false;
}
//Please , don't modify the following code
if (typeof module !== "undefined") {
    module.exports = {
        hasDraw,
        hasWon
    }
}