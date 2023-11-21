import React, { useState, useEffect } from "react";
const ScoreBoard = (props) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("api/player")
      .then((res) => res.json())
      .then((players) => {
        setPlayers(players);
      });
  }, []);
  return (
    <div className="scoreBoard">
      <h3>
        The Top 5 Scores:
        {players.map((player) => (
          <p className="name" key={player.id}>
            {player.name.toUpperCase()}:{player.score}
          </p>
        ))}
      </h3>
    </div>
  );
};
export default ScoreBoard;
