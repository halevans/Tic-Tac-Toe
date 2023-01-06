let numberOfMoves = 0;

function init() {
    console.log("Welcome to Tic Tac Toe");

    // Setup document elements
    const newGameBtn = document.querySelector("#new-game");
    const resetScoresBtn = document.querySelector("#reset-scores");
    const tiles = document.querySelectorAll(".tile");
    
    // Setup event listeners
    newGameBtn.addEventListener("click", e => location.reload())
    resetScoresBtn.addEventListener("click", e => location.reload())
    tiles.forEach(element => {
        element.addEventListener("click", e => tileChange(e.target));
    });
}

// Call the initialisation function to get everything setup
init();

// Helper functions
function tileChange(tileDiv) {
    if (tileDiv.classList.contains("empty")) {
        tileDiv.innerHTML = whichPlayerTurn();
        tileDiv.classList.remove("empty");
        tileDiv.classList.add(whichPlayerTurn());
        numberOfMoves += 1;
    } else return
}

function whichPlayerTurn() {
    if(numberOfMoves % 2 === 0) {
        return "X";
    } else {
        return "O";
    }
}