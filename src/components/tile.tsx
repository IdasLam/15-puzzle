import styled from '@emotion/styled';
import React from 'react';
import { OnHandleTileClickType } from '../types/onHandleTileClick';

const TileContainer = styled.div`
    min-width: 30px;
    text-align: center;
    cursor: pointer;
`

type TileProps = {
  tile: number,
  onHandleTileClick: OnHandleTileClickType

}

function Tile({ tile, onHandleTileClick }: TileProps) {
  return (
    <TileContainer>
      <p>{tile}</p>
    </TileContainer>
  )
}

export default Tile
