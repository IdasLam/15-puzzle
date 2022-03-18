import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import './App.css'
import { generateGrid, GridType } from './helper/puzzle'
import 'normalize.css'
import Puzzle from './components/puzzle'
import LastTileContext from './contexts/lastTile'
import InputFields from './components/InputFields'

const Finnish = styled.div`

`

function App() {
  const [moves, setMoves] = useState(0)
  const [{ columns, rows }, setColumnsRows] = useState({ columns: 2, rows: 2 })
  const [grid, setGrid] = useState<GridType>([])
  const [lastTile, setLastTile] = useState(columns * rows)
  const [puzzleAnswer, setPuzzleAnswer] = useState<number[]>([])
  const [gameFinnished, setGameFinnished] = useState(false)

  const generateNewGrid = () => {
    const { grid: newGrid, answer } = generateGrid({ rows, columns })

    setLastTile(rows * columns)
    setGrid(newGrid)
    setPuzzleAnswer(answer)
  }

  useEffect(() => {
    if (columns > 0 && rows > 0) {
      generateNewGrid()
    }
  }, [columns, rows])

  useEffect(() => {
    if (grid.length > 1 && JSON.stringify(grid.flat()) === JSON.stringify(puzzleAnswer)) {
      setGameFinnished(true)
    }
  }, [grid])

  const addMove = () => {
    setMoves(moves + 1)
  }

  // options for col and rows
  return (
    <div className="App">
      <h1>15 - Puzzle</h1>
      <p>
        Current moves :
        {' '}
        { moves }
      </p>
      <InputFields colRow={{ columns, rows }} setColumnsRows={setColumnsRows} />
      {gameFinnished && (
      <Finnish>
        <p>game finito</p>
      </Finnish>
      )}
      <LastTileContext.Provider value={lastTile}>
        <Puzzle grid={grid} addMove={addMove} setGrid={setGrid} />
      </LastTileContext.Provider>
    </div>
  )
}

export default App
