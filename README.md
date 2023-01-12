# Tic-Tac-Toe

## Description

The primary aim of the Tic-Tac-Toe game is to put into practice the knowledge of HTML, CSS and JavaScript learned in the SEI programme in Unit 1.

## Deployment link

https://halevans.github.io/Tic-Tac-Toe/

## Technologies Used

- Langauges used:
    - Vanilla Javascript
    - CSS
    - html
- Developer Tools:
    - Command Line, Visual Studio Code, Google Chrome Developer Tools
- Code versioning and control tools:
    - Git and GitHub
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

A wireframe for the index page for the MVP was drawn up using Balsamiq Wireframes

![Wireframe for index.html](/images/Index.png)

### Psuedocode

- New game funciton

- Function Init() to initialise game:
    - Create constants for the queryselectors

- html grid layout and id numbers as follows:
    - 1 | 2 | 3  
    \--------  
    4 | 5 | 6  
    \--------  
    7 | 8 | 9  


## Build/Code Process



### Challenges

### Wins

### Key Learnings/Takeaways

### Bugs

None known to date.

## Future Improvements

- Current features:
    - Reduce/eliminate the need for global variables
- Additional features:
    - Customisable tokens for players (e.g. name, icon, picture)
    - localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
    - AI opponent:
        1. Easy AI based off randomly chosen tile that is still empty
        2. Hard AI which uses an algorithm to choose the optimum tile to choose to avoid player from winning game
    - Improve UI for mobile users
    - Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services.