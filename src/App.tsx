import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import './App.css'
import { generateGrid, GridType } from './helper/puzzle'
import 'normalize.css'
import Puzzle from './components/puzzle'
import LastTileContext from './contexts/lastTile'

const Finnish = styled.div`

`

function App() {
  const [moves, setMoves] = useState(0)
  const [{ columns, rows }] = useState({ columns: 4, rows: 4 })
  const [grid, setGrid] = useState<GridType>([])
  const [lastTile] = useState(columns * rows)
  const [puzzleAnswer, setPuzzleAnswer] = useState<number[]>([])
  const [gameFinnished, setGameFinnished] = useState(false)

  useEffect(() => {
    const { grid: newGrid, answer } = generateGrid({ rows, columns })

    setGrid(newGrid)
    setPuzzleAnswer(answer)
  }, [])

  useEffect(() => {
    if (grid.length > 1 && JSON.stringify(grid) === JSON.stringify(puzzleAnswer)) {
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
