import styled from '@emotion/styled';
import React from 'react';

const TileContainer = styled.div`
    min-width: 30px;
`

type TileProps = {
  tile: number
}

function Tile({ tile }: TileProps) {
  return (
    <TileContainer>
      <p>{tile}</p>
    </TileContainer>
  )
}

export default Tile
