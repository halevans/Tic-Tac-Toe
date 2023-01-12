# Tic-Tac-Toe

## Description

Tic-tac-toe is a game for two players who take turns marking the spaces in a three-by-three grid with X or O.

The primary aim of the Tic-Tac-Toe project is to put into practice the knowledge of HTML, CSS and JavaScript learned in the SEI programme in Unit 1.

## Deployment link

https://halevans.github.io/Tic-Tac-Toe/

## Technologies Used

- Langauges used:
    - Vanilla Javascript
    - CSS
    - HTML
- Developer Tools:
    - Command Line, Visual Studio Code, Google Chrome Developer Tools
- Code versioning and control tools:
    - Git and GitHub
- Deployment:
    [GitHub Pages](https://pages.github.com/) was used for deploying the project
- Wireframing and Design Tools:
    - Balsamiq Wireframes
    - Patternpad
    - Colour palette tools

## Planning

### Technical Requirements

- [x] Render a game board in the browser
- [x] Switch turns between X and O (or whichever markers you select)
- [x] Visually display which side won if a player gets three in a row, or show a draw if neither player wins
- [x] Include separate HTML / CSS / JavaScript files
- [x] Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- [x] Use JavaScript for DOM manipulation
- [x] Deploy your game online, where the rest of the world can access it
- [x] You can use GitHub Pages for deploying your project
- [x] Use semantic markup for HTML and CSS (adhere to best practices)
- [x] Have well-formatted, and well-commented code

### User Stories for minimum viable product (MVP)

- [x] As a user, I should be able to start a new tic tac toe game
- [x] As a user, I should be able to click on a square to add X first and then O, and so on
- [x] As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- [x] As a user, I should not be able to click the same square twice
- [x] As a user, I should be shown a message when I win, lose or tie
- [x] As a user, I should not be able to continue playing once I win, lose, or tie
- [x] As a user, I should be able to play the game again without refreshing the page

### Potential (Bonus) Extra Tic Tac Toe Features

- [x] Keep track of multiple game rounds with a win, lose and tie counter
- [ ] Allow players to customize their tokens (X, O, name, picture, etc)
- [ ] Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- [x] Involve Audio in your game
- [ ] Create an AI opponent: teach JavaScript to play an unbeatable game against you
- [ ] Make your site fully responsive so that it is playable from a mobile phone
- [x] Get inventive with your styling e.g. use hover effects or animations

### Super Potential (Bonus) Extra Tic Tac Toe Features

- [ ] Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services

### Gold, silver, bronze planning for MVP

- Bronze:
    - An HTML page with a table of 9 cells.
    - Just enough Javascript to show you who the current player is and change the background color of a cell when you click on it
    - Just enough CSS to make the cells visible.
- Silver:
    - Enough CSS to make it actually look like a game, and enough Javascript for a "New Game" and "Reset" button.
- Gold:
    - CSS transitions or animations, showing "X" and "O" instead of colors, and Javascript that tells you when the game is over and who won
    - When user hovers over the cell, change cell colour
    - When a 3 in a row occurs "X" or "O" icons flash to indicate to user that those are the 3 winning tiles

### Wireframe

A wireframe for the index page for the MVP was drawn up using Balsamiq Wireframes:

![Wireframe for index.html](/images/Index.png)

### Psuedocode

- A game object
- New game funciton
- Function `Init()` to initialise game:
    - Create constants for the queryselectors
- HTML grid layout and id numbers as follows:
    - 1 | 2 | 3  
    \--------  
    4 | 5 | 6  
    \--------  
    7 | 8 | 9  

## Build/Code Process

- Planning phase:
    - The key to the planning phase was to identify the MVP design using the User Stories outlined in Section
    - The planning phase was intended to:
        1. design the interface for the user, specifically what the user needs and what fits the requirements
        2. come up with a solution that satisfys the MVP
    - Wireframing was used to define a basic UI to give a layout to design the first pass of HTML and CSS code
    - Psuedocode was used to think critically about the requirements and break them down into small steps

- MVP coding phase:
    - Basic HTML was coded to resemble the wireframe designed in the planning phase
    - This was folled up with basic CSS
    - Javascript was then coded in the following order:
        1. Global variables were created for ease of MVP coding. These were later changed to be within an object to improve best practices
        2. A basic `Init()` function was created to initialise the app
        3. A `tileChange()` function was also created to give basic functionality for when a user clicks on a tile
        4. Further functions including `whichPlayerTurn()`, to determine who's turn it was, `checkWin()` to determine if a tile change had resulted in a winning combination, were created

- Refactoring of MVP
    - Once a working MVP had been created, the code was reviewed to be made more simple, easier to read, and superfluous code removed

- Bonus features
    - Further functions including `updateScore()`, `setHoverText()` and `mute()` were created to add bonus functionality to the applicaiton

### Challenges



### Wins

### Key Learnings/Takeaways

### Bugs

None known to date.

## Final Product

![Final product in desktop web browser](/images/Final-product-desktop.png)

![Final producted winning state in desktop web browser](/images/Final-product-desktop-winning-state.png)


## Future Improvements

- Current features:
    - Use and strictly follow a style guide (for example [Airbnb's](https://github.com/airbnb/javascript#types))
    - Reduce/eliminate the need for global variables
- Additional features:
    - Customisable tokens for players (e.g. name, icon, picture)
    - localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
    - AI opponent:
        1. Easy AI based off randomly chosen tile that is still empty
        2. Hard AI which uses an algorithm to choose the optimum tile to choose to avoid player from winning game
    - Improve UI for mobile users
    - Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services

## Outstanding Queries

- In the context of this game, what is the best way to set it up? Is it for instance a Class? Or is an object (i.e. with globally accessible variables) also good practice?