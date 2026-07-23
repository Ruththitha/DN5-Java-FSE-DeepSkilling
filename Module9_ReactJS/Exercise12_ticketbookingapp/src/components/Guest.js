import React from 'react';
import FlightDetails from './FlightDetails';

function Guest() {
  return (
    <div className="page">
      <h2>Welcome Guest</h2>
      <p>Please login to book tickets. You can browse available flights below.</p>
      <FlightDetails showBooking={false} />
    </div>
  );
}

export default Guest;