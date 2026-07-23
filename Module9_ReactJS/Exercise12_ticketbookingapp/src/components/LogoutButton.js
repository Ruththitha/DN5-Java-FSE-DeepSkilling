import React from 'react';

function LogoutButton(props) {
  return (
    <button className="auth-btn logout" onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LogoutButton;