
function init() {
    console.log("Welcome to Tic Tac Toe");

    // Setup document elements
    const newGameBtn = document.querySelector("#new-game");
    const resetScoresBtn = document.querySelector("#reset-scores");
    const squares = document.querySelectorAll(".square");
    console.log(squares);
    
    // Setup event listeners
    newGameBtn.addEventListener("click", e => console.log(e))
    resetScoresBtn.addEventListener("click", e => console.log(e))
    squares.forEach(element => {
        element.addEventListener("click", e => console.log(e.target));
    });
}

// Call the initialisation function to get everything setup
init();