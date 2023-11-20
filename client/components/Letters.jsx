import React, { useState } from "react";

const Letters = (props) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [visibleLetters, setVisibleLetters] = useState(alphabet.split(""));

  const handleButtonClick = (letter) => {
    setVisibleLetters((prevVisibleLetters) =>
      prevVisibleLetters.filter((visibleLetter) => visibleLetter !== letter)
    );
    props.setGuessedLetters((prevGuessedLetters) => [
      ...prevGuessedLetters,
      letter,
    ]);
  };

  return (
    <div className="letterArea">
      {visibleLetters.map((letter) => (
        <button
          className="letterButton"
          key={letter}
          onClick={() => {
            handleButtonClick(letter);
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
