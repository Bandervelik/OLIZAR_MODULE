import React from 'react';

const Footer = ({ group }) => {
  return (
    <footer style={{ background: '#f1f1f1', padding: '10px', textAlign: 'center' }}>
      <p>Група: {group}</p>
    </footer>
  );
};

export default Footer;
