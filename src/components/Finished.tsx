import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

const FinishedContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #0000008a;
`

const TextContainer = styled.div`
    position: absolute;
    padding: 20px;
    background-color: white;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    z-index: 10;
    background-color: #d5bdaf;
    display: flex;
    gap: 5vh;
    flex-flow: column;
`

type FinishedProps = {
  moves: number,
  playAgain: () => void
}

// Text that gets displayed when the game is Finished
function Finished({ moves, playAgain }: FinishedProps) {
  return (
    <>
      <FinishedContainer onClick={() => { return playAgain() }} />
      <TextContainer>
        <h1>
          You finished the game in
          {' '}
          {moves}
          {' '}
          moves!
        </h1>
        <Button variant="contained" onClick={() => { return playAgain() }}>Play again!</Button>
      </TextContainer>
    </>
  )
}

export default Finished
