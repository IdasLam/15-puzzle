import styled from '@emotion/styled';
import React, { useContext } from 'react';
import LastTileContext from '../contexts/lastTile';
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
  const lastTile = useContext(LastTileContext)

  console.log(lastTile)

  const tileName = tile === lastTile ? null : tile

  return (
    <TileContainer>
      <p>{tileName}</p>
    </TileContainer>
  )
}

export default Tile
