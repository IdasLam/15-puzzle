import styled from '@emotion/styled'
import React from 'react'
import { GridType } from '../helper/puzzle'
import Row from './row'

type GridProps = {
  grid: GridType
}

const GridContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
`

function Puzzle({ grid }: GridProps) {
  return (
    <GridContainer>
      {grid && grid.map((row) => { return <Row key={row.toString()} row={row} /> })}
    </GridContainer>
  )
}

export default Puzzle
