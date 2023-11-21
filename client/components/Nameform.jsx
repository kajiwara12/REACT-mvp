import React, { useState } from "react";

const NameForm = (props) => {
  let hide = true;
  if (props.wrongGuesses >= 6) {
    hide = false;
  }
  const [userResponse, setUserResponse] = useState("");
  const [disabled, setDisabled] = useState(false);

  const recordResponse = (event) => {
    setUserResponse(event.target.value);
  };

  const submitResponse = (event) => {
    event.preventDefault();
    console.log("Submitting response...");
    fetch("/api/player", {
      method: "POST",
      body: JSON.stringify({ name: userResponse, score: props.score }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Response submitted:", data))
      .catch((error) => console.error("Error submitting response:", error));
    setUserResponse("");

    setDisabled(true);
  };

  return (
    <div className="popup" hidden={hide}>
      <form id="response" data-testid="response" onSubmit={submitResponse}>
        <input
          type="text"
          placeholder="Name goes here!"
          onChange={recordResponse}
          value={userResponse}
          disabled={disabled}
        />
      </form>
      <p>Final Score:{props.score}</p>
    </div>
  );
};

export default NameForm;
