import React, { useState } from "react";

const Letters = (props) => {
  let hide = false;
  if (props.wrongGuesses >= 6) {
    hide = true;
  }
  if (props.roundWin === true) {
    hide = true;
  }
  // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // const [visibleLetters, setVisibleLetters] = useState(alphabet.split(""));

  const handleButtonClick = (letter) => {
    props.setVisibleLetters((prevVisibleLetters) =>
      prevVisibleLetters.filter((visibleLetter) => visibleLetter !== letter)
    );
    props.setGuessedLetters((prevGuessedLetters) => [
      ...prevGuessedLetters,
      letter,
    ]);
  };

  return (
    <div className="letterArea">
      {props.visibleLetters.map((letter) => (
        <button
          className="letterButton"
          key={letter}
          onClick={() => {
            handleButtonClick(letter);
          }}
          disabled={hide}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
