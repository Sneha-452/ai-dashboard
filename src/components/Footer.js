import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#6a0dad', // Purple-bluish color
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontFamily: 'Arial, sans-serif',
    position: 'fixed',
    width: '100%',
    bottom: 0
  };

  return (
    <div style={footerStyle}>
      <p>Thank you for visiting!😊</p>
    </div>
  );
}

export default Footer;




