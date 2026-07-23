import React from "react";

function EvenPlayers({ players }) {
  return (
    <div>
      <h3>Even Players</h3>
      <ul>
        {players
          .filter((player, index) => index % 2 !== 0)
          .map((player, index) => (
            <li key={index}>{player}</li>
          ))}
      </ul>
    </div>
  );
}

export default EvenPlayers;
