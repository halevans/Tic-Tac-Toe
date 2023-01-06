
function init() {
    console.log("Welcome to Tic Tac Toe");

    // Setup document elements
    const newGame = document.querySelector("#new-game");
    const resetScores = document.querySelector("#reset-scores");
    
    // Setup event listeners
    newGame.addEventListener("click", e => console.log(e))
    resetScores.addEventListener("click", e => console.log(e))

}

// Call the initialisation function to get everything setup
init();