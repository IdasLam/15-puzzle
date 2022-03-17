import styled from '@emotion/styled'
import React from 'react'
import { RowType } from '../helper/puzzle'
import { OnHandleTileClickType } from '../types/onHandleTileClick'
import Tile from './tile'

const TileContainer = styled.div`
    display: flex;
    gap: 20px;
`

type RowProps = {
  row: RowType,
  onHandleTileClick: OnHandleTileClickType
}

function Row({ row, onHandleTileClick }: RowProps) {
  return (
    <TileContainer>
      {row.map((tile) => {
        return <Tile key={tile} tile={tile} onHandleTileClick={onHandleTileClick} />
      })}
    </TileContainer>
  )
}

export default Row
