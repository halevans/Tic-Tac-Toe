// GLOBAL VARIABLES

// Namespace object to organise changing global variables
const game = {
    numberOfMoves: 0,
    muteBool: false,
    gameOver: false
}

// Audio files used in game
const audioFiles = {
    tileClickAudio: new Audio("./audio/mixkit-video-game-retro-click-237.wav"),
    newGameAudio: new Audio("./audio/mixkit-click-melodic-tone-1129.wav"),
    winGameAudio: new Audio("./audio/mixkit-winning-notification-2018.wav")
}

// Selecting elements in document
const userMessages = document.querySelector(".message-section p");
const tiles = document.querySelectorAll(".tile");
const newGameBtn = document.querySelector("#new-game");
const resetScoresBtn = document.querySelector("#reset-scores");
const muteBtn = document.querySelector("#mute");
const muteBtnImage = document.querySelector("#mute-image");

// INITIALISE APP
init();

// FUNCTIONS

// Initialisation 
function init() {
    console.log("Welcome to Tic Tac Toe");

    // Setup event listeners
    newGameBtn.addEventListener("click", e => newGame());
    resetScoresBtn.addEventListener("click", e => location.reload());
    tiles.forEach(element => {
        element.addEventListener("click", e => tileChange(e.target));
    });
    muteBtn.addEventListener("click", e => mute());
    
    // Initialises a new game for the first time
    newGame();
    mute() // remove later -- muting to avoid sounds playing all the time when building!
}

// The tileChange function is where the main logic flow of the game occurs, when a tile is pressed
function tileChange(tileDiv) {
    if (game.gameOver) {
        return
    } else if (tileDiv.classList.contains("empty")) {
        audioFiles.tileClickAudio.play();
        tileDiv.innerHTML = whichPlayerTurn();
        tileDiv.classList.remove("empty");
        tileDiv.classList.add(whichPlayerTurn());
        checkWin();
        game.numberOfMoves += 1;
        updateMessage();
        setHoverText();
    } else return
}

// The whichPlayer Turn function check which player's move it is currently
function whichPlayerTurn() {
    if (game.numberOfMoves % 2 === 0) {
        return "X";
    } else {
        return "O";
    }
}

// The newGame function resets the board, including the class of the tile divs and the innerHTML to blank
function newGame() {
    audioFiles.newGameAudio.play();
    game.gameOver = false;
    game.numberOfMoves = 0;
    tiles.forEach(element => {
        element.classList = "tile empty";
        element.innerHTML = "";
    });
    updateMessage();
    setHoverText();
}

// The checkWin function checks to see whether the current selection on the board yields a win for a player or a tie
function checkWin() {
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
            audioFiles.winGameAudio.play();
            userMessages.innerHTML = `Player ${whichPlayerTurn()} wins!`;
            updateScore(whichPlayerTurn());
            game.gameOver = true;
            tile1.classList.add("winning-tile");
            tile2.classList.add("winning-tile");
            tile3.classList.add("winning-tile");
        }
    });

    // check if game is a draw
    if (game.numberOfMoves === 8 && game.gameOver === false) {
        audioFiles.winGameAudio.play();
        userMessages.innerHTML = `It's a Tie!`;
        updateScore("Tie");
        game.gameOver = true;
    }
}

// The updateScore function increases the scores on the scoreboard depending who has won or tied
function updateScore(player) {
    let scoreElement;
    if (player === "Tie") {
        scoreElement = document.querySelector("#tie-score");
    } else {
        scoreElement = document.querySelector(`#player-${player}-score`);
    }
    scoreElement.innerText = parseInt(scoreElement.innerText) + 1;
}

// This function updates the message the user sees regarding who's turn it is
function updateMessage() {
    if (game.gameOver !== true) {
        userMessages.innerText = `Player ${whichPlayerTurn()}'s turn`;
    }
}

// This function sets the text inside the tiles when the mouse is hovered over a tile
function setHoverText() {
    tiles.forEach(tile => {
        // remove any legacy X-hover or O-hover
        tile.classList.remove("X-hover");
        tile.classList.remove("O-hover");
        // if tile is empty, add X-hover or O-hover
        if (tile.classList.contains("empty")) {
            tile.classList.add(`${whichPlayerTurn()}-hover`);
        }
    });
}

// This function enables user to mute and unmute audio
function mute() {
    if (game.muteBool) {  
        muteBtnImage.src = "./images/icons8-audio-100.png";
        game.muteBool = false;
        Object.keys(audioFiles).forEach(audioFile => {
            audioFiles[audioFile].muted = false;
        });
    } else if (!game.muteBool) {
        muteBtnImage.src = "./images/icons8-mute-100.png";
        game.muteBool = true;
        Object.keys(audioFiles).forEach(audioFile => {
            audioFiles[audioFile].muted = true;
        });
    }
}