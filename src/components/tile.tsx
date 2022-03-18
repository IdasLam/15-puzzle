import styled from '@emotion/styled';
import React, { useContext } from 'react';
import LastTileContext from '../contexts/lastTile';
import { OnHandleTileClickType } from '../types/onHandleTileClick';

const TileContainer = styled.div`
  p {
    min-width: 30px;
  }
  text-align: center;
  cursor: pointer;
`

type TileProps = {
  tile: number,
  onHandleTileClick: OnHandleTileClickType
}

function Tile({ tile, onHandleTileClick }: TileProps) {
  const lastTile = useContext(LastTileContext)

  const tileName = tile === lastTile ? '-' : tile

  return (
    <TileContainer>
      <p onClick={() => { return onHandleTileClick(tile) }}>{tileName}</p>
    </TileContainer>
  )
}

export default Tile
