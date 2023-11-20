import React, { useState, useEffect } from "react";
import Letters from "./Letters.jsx";
import WordFetcher from "./WordFetcher.jsx";
import Canvas from "./Canvas.jsx";
const Gameboard = (props) => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  console.log(guessedLetters);
  console.log(wordToGuess);
  console.log(wrongGuesses);

  useEffect(() => {
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    if (lastGuessedLetter && !wordToGuess.includes(lastGuessedLetter)) {
      setWrongGuesses((prvWrongGuesses) => prvWrongGuesses + 1);
    }
  }, [guessedLetters, wordToGuess]);

  return (
    <div data-testid="gameboard" id="gameBoard">
      <Canvas width="200" height="200" />
      <WordFetcher
        setWordToGuess={setWordToGuess}
        guessedLetters={guessedLetters}
        wrongGuesses={wrongGuesses}
      />
      <Letters
        setGuessedLetters={setGuessedLetters}
        wordToGuess={wordToGuess}
      />
    </div>
  );
};

export default Gameboard;
