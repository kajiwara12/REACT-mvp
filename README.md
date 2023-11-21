# Hangman React App

Welcome to the Hangman React App! This web application allows users to play the classic game of Hangman. Try to guess the word by selecting letters, but be careful - you only have six incorrect guesses before the game is over!

## Features

- **Scoreboard:** View the top 5 scores of players.
- **Gameboard:** Play the Hangman game, guess the word, and track your progress.
- **NameForm:** Submit your name and score after a game.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd hangman-react-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the App:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## How to Play

1. **Start a New Game:**

   - Click the "Play Again" button to start a new game.

2. **Guess the Word:**

   - Click on the letter buttons to guess the word.

3. **Win or Lose:**

   - Successfully guess the word to win the round.
   - Make six incorrect guesses, and the game is over.

4. **Submit Your Score:**
   - After the game, enter your name in the popup to submit your score.

## Components

- **App:** The main component that renders Scoreboard, Gameboard, and NameForm.
- **Gameboard:** Manages the game logic, Canvas, WordFetcher, and Letters.
- **NameForm:** Allows users to submit their name and score.
- **Scoreboard:** Displays the top 5 scores.

## File Structure

- **components:** Contains React components.
- **app.css:** Stylesheet for the app.
- **index.html:** HTML file for the app.
- **index.jsx:** Entry point for React app.
- **server.js:** Backend server for handling player data.

## Technologies Used

- React
- Express.js
- PostgreSQL

## Dependencies

- Frontend: React, React DOM
- Backend: PostgreSQL, Express

## Acknowledment

The font style is sourced from Google Fonts from CodeMan38 [here](https://fonts.google.com/?query=CodeMan38)

## License

This project is licensed under the [MIT License](LICENSE).

---
