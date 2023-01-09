// Global variables
let numberOfMoves;
let playerXScore = 0;
let playerOScore = 0;
const userMessages = document.querySelector(".message-section p");

function init() {
    console.log("Welcome to Tic Tac Toe");

    // Setup document elements
    const newGameBtn = document.querySelector("#new-game");
    const resetScoresBtn = document.querySelector("#reset-scores");
    const tiles = document.querySelectorAll(".tile");
    
    // Setup event listeners
    newGameBtn.addEventListener("click", e => newGame(tiles));
    resetScoresBtn.addEventListener("click", e => location.reload());
    tiles.forEach(element => {
        element.addEventListener("click", e => tileChange(e.target));
    });
    
    // Initialises a new game for the first time
    newGame(tiles);
}

// Call the initialisation function to get everything setup
init();

// Helper functions
function tileChange(tileDiv) {
    if (tileDiv.classList.contains("empty")) {
        tileDiv.innerHTML = whichPlayerTurn();
        tileDiv.classList.remove("empty");
        tileDiv.classList.add(whichPlayerTurn());
        checkWin();
        numberOfMoves += 1;
    } else return
}

// The whichPlayer Turn function check which player's move it is currently
function whichPlayerTurn() {
    if(numberOfMoves % 2 === 0) {
        return "X";
    } else {
        return "O";
    }
}

// The newGame function resets the board, including the class of the tile divs and the innerHTML to blank
function newGame(tiles) {
    numberOfMoves = 0;
    tiles.forEach(element => {
        element.classList = "tile empty";
        element.innerHTML = "";
    });
}

// The checkWin function checks to see whether the current selection on the board yields a win for a player
function checkWin() {
    const tiles = document.querySelectorAll(".tile");

    const winCombinations = [
        // Rows
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        // Columns
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        // Diagonals
        [1, 5, 9], [3, 5, 7]
    ];

    winCombinations.forEach(wincombo => {
        let tile1 = document.querySelector("#tile"+wincombo[0]);
        let tile2 = document.querySelector("#tile"+wincombo[1]);
        let tile3 = document.querySelector("#tile"+wincombo[2]);

        // check if the board has a winning combination as defined in winCombinations
        if (tile1.classList.contains(whichPlayerTurn()) && tile2.classList.contains(whichPlayerTurn()) && tile3.classList.contains(whichPlayerTurn())) {
            alert(`Player ${whichPlayerTurn()} wins!`);
            userMessages.innerHTML = `Player ${whichPlayerTurn()} wins!`;
            updateScore(whichPlayerTurn());
        // check if game is a draw
        } else if (numberOfMoves === 8) {
            updateScore("Tie");
        // else return to game
        } else return
    });
}

function updateScore(player) {
    let scoreElement;
    if (player === "Tie") {
        scoreElement = document.querySelector("#tie-score");
    } else {
        scoreElement = document.querySelector(`#player-${player}-score`);
    }
    scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
}