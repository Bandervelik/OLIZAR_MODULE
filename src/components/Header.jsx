import React from 'react';

const Header = ({ name, city, hobby }) => {
  return (
    <header style={{ background: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
