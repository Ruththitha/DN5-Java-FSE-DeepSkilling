import React from "react";

function OddPlayers({ players }) {
  return (
    <div>
      <h3>Odd Players</h3>
      <ul>
        {players
          .filter((player, index) => index % 2 === 0)
          .map((player, index) => (
            <li key={index}>{player}</li>
          ))}
      </ul>
    </div>
  );
}

export default OddPlayers;
