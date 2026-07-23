import React from 'react';

const flights = [
  { id: 1, flightNo: 'AI-101', source: 'Chennai', destination: 'Delhi', time: '06:00 AM', price: 4500 },
  { id: 2, flightNo: 'AI-202', source: 'Bengaluru', destination: 'Mumbai', time: '09:30 AM', price: 3800 },
  { id: 3, flightNo: 'AI-303', source: 'Hyderabad', destination: 'Kolkata', time: '01:15 PM', price: 5200 },
  { id: 4, flightNo: 'AI-404', source: 'Coimbatore', destination: 'Delhi', time: '07:45 PM', price: 6100 }
];

function FlightDetails(props) {
  return (
    <table className="flight-table">
      <thead>
        <tr>
          <th>Flight No</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Price</th>
          {props.showBooking && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {flights.map(flight => (
          <tr key={flight.id}>
            <td>{flight.flightNo}</td>
            <td>{flight.source}</td>
            <td>{flight.destination}</td>
            <td>{flight.time}</td>
            <td>&#8377;{flight.price}</td>
            {props.showBooking && (
              <td>
                <button className="book-btn" onClick={() => alert(`Flight ${flight.flightNo} booked successfully!`)}>
                  Book Now
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightDetails;