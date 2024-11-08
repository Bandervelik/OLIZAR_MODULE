import React from 'react';

const Page1 = ({ city }) => {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Про мене</h2>
      <p>Місто: {city}</p>
    </main>
  );
};

export default Page1;
