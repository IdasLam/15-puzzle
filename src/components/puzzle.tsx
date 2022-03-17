import React from 'react'
import styled from '@emotion/styled'
import { RowType } from '../helper/puzzle'
import Row from './row'
import { OnHandleTileClickType } from '../types/onHandleTileClick'

type GridProps = {
  grid: RowType[]
}

const GridContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
`

function Puzzle({ grid }: GridProps) {
  const onHandleTileClick: OnHandleTileClickType = (tile) => {
    console.log('kocker')
  }

  return (
    <GridContainer>
      {
        grid && grid.map((row) => {
          return <Row key={row.toString()} row={row} onHandleTileClick={onHandleTileClick} />
        })
      }
    </GridContainer>
  )
}

export default Puzzle
