import React, { useContext } from 'react'
import styled from '@emotion/styled'
import {
  GridType, moveTile, RowType,
} from '../helper/puzzle'
import Row from './row'
import { OnHandleTileClickType } from '../types/onHandleTileClick'
import LastTileContext from '../contexts/lastTile'

type GridProps = {
  grid: RowType[],
  addMove: () => void,
  setGrid: React.Dispatch<React.SetStateAction<GridType>>
}

const GridContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
`

function Puzzle({ grid, addMove, setGrid }: GridProps) {
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
        grid && grid.map((row) => {
          return <Row key={row.toString()} row={row} onHandleTileClick={onHandleTileClick} />
        })
      }
    </GridContainer>
  )
}

export default Puzzle
