import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

const FinnishedContainer = styled.div`
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
`

type Finnished = {
  moves: number,
  playAgain: () => void
}

// Text that gets displayed when the game is finnished
function Finnised({ moves, playAgain }: Finnished) {
  return (
    <>
      <FinnishedContainer onClick={() => { return playAgain() }} />
      <TextContainer>
        <h1>
          You finnshed the game in
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

export default Finnised
