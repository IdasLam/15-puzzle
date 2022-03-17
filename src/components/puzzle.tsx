import React from 'react'
import styled from '@emotion/styled'
import { RowType } from '../helper/puzzle'
import Row from './row'

type GridProps = {
  grid: RowType[],
  lastTile: number
}

const GridContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
`

function Puzzle({ grid, lastTile }: GridProps) {
  console.log(lastTile)
  return (
    <GridContainer>
      {grid && grid.map((row) => { return <Row key={row.toString()} row={row} /> })}
    </GridContainer>
  )
}

export default Puzzle
