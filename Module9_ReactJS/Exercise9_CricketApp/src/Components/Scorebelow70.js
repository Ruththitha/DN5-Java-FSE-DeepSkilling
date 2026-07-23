import React from "react";

function Scorebelow70({ players }) {
  return (
    <div>
      <h3>Players with Score below 70</h3>
      <ul>
        {players
          .filter((player) => player.score < 70)
          .map((player, index) => (
            <li key={index}>
              {player.name} - {player.score}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Scorebelow70;
