import React from 'react';
import FlightDetails from './FlightDetails';

function User() {
  return (
    <div className="page">
      <h2>Welcome User</h2>
      <p>You are logged in. You can now book your tickets.</p>
      <FlightDetails showBooking={true} />
    </div>
  );
}

export default User;