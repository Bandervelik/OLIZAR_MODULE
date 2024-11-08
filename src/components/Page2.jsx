import React from 'react';

const Page2 = ({ hobby }) => {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Про моє хобі</h2>
      <p>Хобі: {hobby}</p>
    </main>
  );
};

export default Page2;
