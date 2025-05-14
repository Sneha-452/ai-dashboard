import React from 'react';

function Header() {
  const headerStyle = {
   backgroundColor: '#6a0dad', // Purple-bluish
    color: 'white',
    padding: '15px 0',
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={headerStyle}>
      <h1>WELCOME!!😄</h1>
    </div>
  );
}

export default Header;


