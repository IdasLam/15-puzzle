import React from 'react';

function Header({ moves }: { moves: number }) {
  return (
    <div>
      <h1>15 - Puzzle</h1>
      <p>by Ida Lam</p>
      <h2>
        Current moves :
        {' '}
        { moves }
      </h2>
    </div>
  )
}

export default Header
