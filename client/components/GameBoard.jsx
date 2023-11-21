import React, { useState, useEffect } from "react";
import Letters from "./Letters.jsx";
import WordFetcher from "./WordFetcher.jsx";
import Canvas from "./Canvas.jsx";

const Gameboard = (props) => {
  const [wordToGuess, setWordToGuess] = useState("");
  const [roundWin, setRoundWin] = useState(false);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [visibleLetters, setVisibleLetters] = useState(alphabet.split(""));

  useEffect(() => {
    const lastGuessedLetter =
      props.guessedLetters[props.guessedLetters.length - 1];
    if (lastGuessedLetter && !wordToGuess.includes(lastGuessedLetter)) {
      props.setWrongGuesses((prvWrongGuesses) => prvWrongGuesses + 1);
    }
  }, [props.guessedLetters, wordToGuess]);

  return (
    <div data-testid="gameboard" id="gameBoard">
      <Canvas width="200" height="200" wrongGuesses={props.wrongGuesses} />
      <WordFetcher
        setWordToGuess={setWordToGuess}
        guessedLetters={props.guessedLetters}
        wrongGuesses={props.wrongGuesses}
        setGuessedLetters={props.setGuessedLetters}
        setWrongGuesses={props.setWrongGuesses}
        setVisibleLetters={setVisibleLetters}
        setRoundWin={setRoundWin}
        roundWin={roundWin}
        score={props.score}
        setScore={props.setScore}
      />
      <Letters
        wrongGuesses={props.wrongGuesses}
        visibleLetters={visibleLetters}
        setVisibleLetters={setVisibleLetters}
        setGuessedLetters={props.setGuessedLetters}
        wordToGuess={wordToGuess}
        guessedLetters={props.guessedLetters}
        score={props.score}
        roundWin={roundWin}
      />
    </div>
  );
};

export default Gameboard;
