import React, { useState, useEffect } from "react";

const WordFetcher = (props) => {
  const [word, setWord] = useState("");

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
    } catch (error) {
      console.error("Error fetching word:", error);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div className="gameArea">
      <h3 id="header">Wrong Guesses {props.wrongGuesses}/6</h3>
      <p>
        {word.split("").map((letter, index) => (
          <span key={index} className="guessedSpot">
            {props.guessedLetters.includes(letter) ? letter : " _ "}
          </span>
        ))}
      </p>
      {/* <button onClick={fetchWord}>Get A Word</button> */}
    </div>
  );
};

export default WordFetcher;
