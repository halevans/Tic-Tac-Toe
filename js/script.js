let numberOfMoves = 0;

function init() {
    console.log("Welcome to Tic Tac Toe");

    // Setup document elements
    const newGameBtn = document.querySelector("#new-game");
    const resetScoresBtn = document.querySelector("#reset-scores");
    const tiles = document.querySelectorAll(".tile");
    
    // Setup event listeners
    newGameBtn.addEventListener("click", e => console.log(e))
    resetScoresBtn.addEventListener("click", e => console.log(e))
    tiles.forEach(element => {
        element.addEventListener("click", e => tileChange(e.target));
    });
}

// Call the initialisation function to get everything setup
init();

// Helper functions
function tileChange(tileNumber) {
    tileNumber.innerHTML = whichPlayerTurn();
    tileNumber.classList.remove("empty");
    tileNumber.classList.add(whichPlayerTurn());
    console.log(whichPlayerTurn());
    numberOfMoves += 1;
}

function whichPlayerTurn() {
    if(numberOfMoves % 2 === 0) {
        return "X";
    } else {
        return "O";
    }
}