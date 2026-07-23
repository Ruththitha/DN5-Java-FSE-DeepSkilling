import React from "react";

function ListofIndianPlayers({ players }) {
  return (
    <div>
      <h3>Indian Players</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofIndianPlayers;
