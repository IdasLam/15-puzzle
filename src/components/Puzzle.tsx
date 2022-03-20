import React, { useContext } from 'react'
import styled from '@emotion/styled'
import {
  moveTile,
} from '../helper/puzzle'
import Row from './Row'
import { OnHandleTileClickType } from '../types/onHandleTileClick'
import LastTileContext from '../contexts/lastTile'
import { GridType, RowType } from '../types/puzzle'

type GridProps = {
  grid: RowType[],
  addMove: () => void,
  setGrid: React.Dispatch<React.SetStateAction<GridType>>,
}

const GridContainer = styled.div`
    margin-top: 5vh;
    background-color: #b08968;
    padding: 5%;
    border-radius: 30px;
`
// Puzzle game which generates each row
function Puzzle({
  grid, addMove, setGrid,
}: GridProps) {
  const lastTile = useContext(LastTileContext)

  const onHandleTileClick: OnHandleTileClickType = ({ tile, name }) => {
    const newGrid = moveTile({
      grid, tile, lastTile, name,
    })

    if (newGrid) {
      addMove()
      setGrid(newGrid)
    }
  }

  return (
    <GridContainer>
      {
        grid.length > 0 && grid.map((row) => {
          return <Row key={row.toString()} row={row} onHandleTileClick={onHandleTileClick} />
        })
      }
    </GridContainer>
  )
}

export default Puzzle
