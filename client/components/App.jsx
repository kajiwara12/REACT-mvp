import React, { useEffect, useState } from "react";
import Gameboard from "./GameBoard.jsx";
import ScoreBoard from "./Scoreboard.jsx";
import NameForm from "./Nameform.jsx";

const App = () => {
  const [score, setScore] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  return (
    <div id="app">
      <ScoreBoard />
      <Gameboard
        score={score}
        setScore={setScore}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        wrongGuesses={wrongGuesses}
        setWrongGuesses={setWrongGuesses}
      />
      <NameForm
        setWrongGuesses={setWrongGuesses}
        wrongGuesses={wrongGuesses}
        score={score}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
    </div>
  );
};

export default App;
