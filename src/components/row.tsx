import styled from '@emotion/styled'
import React from 'react'
import { RowType } from '../helper/puzzle'
import Tile from './tile'

const TileContainer = styled.div`
    display: flex;
    gap: 20px;
`

type RowProps = {
  row: RowType
}

function Row({ row }: RowProps) {
  return (
    <TileContainer>
      {row.map((tile) => { return <Tile key={tile} tile={tile} /> })}
    </TileContainer>
  )
}

export default Row
