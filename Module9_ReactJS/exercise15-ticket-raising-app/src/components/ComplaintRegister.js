import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (employeeName.trim() === '' || complaint.trim() === '') {
      alert('Please fill in both Employee Name and Complaint fields.');
      return;
    }

    // Generate a random reference number
    const referenceNumber = 'REF' + Math.floor(100000 + Math.random() * 900000);

    alert(
      `Complaint submitted successfully!\n\n` +
      `Employee Name: ${employeeName}\n` +
      `Reference Number: ${referenceNumber}\n\n` +
      `Please use this reference number for further follow-ups.`
    );

    // Reset form after submission
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div className="complaint-form">
      <h2>Complaint Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Complaint:</label>
          <textarea
            rows="5"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            placeholder="Describe your complaint"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;