import React, { useState, useEffect } from "react";

const WordFetcher = (props) => {
  const [word, setWord] = useState("");
  let isHidden = true;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (props.wrongGuesses >= 6) {
    isHidden = false;
  }

  const fetchWord = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase"
      );
      const data = await response.json();
      const fetchedWord = data[0].toUpperCase();
      console.log(data[0]);
      setWord(fetchedWord);
      props.setWordToGuess(fetchedWord);
      props.setRoundWin(false);
    } catch (error) {
      console.error("Error fetching word:", error);
    }
  };

  const resetGame = () => {
    props.setWrongGuesses(0);
    props.setGuessedLetters([]);
    props.setScore(0);
    props.setVisibleLetters(alphabet.split(""));
    fetchWord();
  };

  const newWord = () => {
    props.setWrongGuesses(0);
    props.setGuessedLetters([]);
    props.setVisibleLetters(alphabet.split(""));
    fetchWord();
    console.log(props.score);
  };

  useEffect(() => {
    if (
      word &&
      word.split("").every((letter) => props.guessedLetters.includes(letter))
    ) {
      props.setRoundWin(true);
      props.setScore((prevScore) => prevScore + 1);
    }
  }, [props.guessedLetters, word]);

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div className="gameArea">
      <h3 id="header">Wrong Guesses {props.wrongGuesses}/6</h3>
      <h3 id="header">Score: {props.score}</h3>
      <p>
        {word.split("").map((letter, index) => (
          <span key={index} className="guessedSpot">
            {props.guessedLetters.includes(letter) ? letter : " _ "}
          </span>
        ))}
      </p>
      <button onClick={resetGame} hidden={isHidden}>
        Play Again
      </button>
      <button onClick={newWord} hidden={!props.roundWin}>
        Next Round
      </button>
    </div>
  );
};

export default WordFetcher;
