import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Button, ThemeProvider } from '@mui/material'
import './App.css'
import { generateGrid, GridType } from './helper/puzzle'
import 'normalize.css'
import Puzzle from './components/puzzle'
import LastTileContext from './contexts/lastTile'
import InputFields from './components/InputFields'
import Finnised from './components/Finnished'
import theme from './theme'

const AppContainer = styled.div`
  display: flex;
  gap: 2vh;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  margin-top: 5vh;

  h1 {
    margin-bottom: 0;
  }

  > p {
    margin: unset;
  }
`

function App() {
  const [moves, setMoves] = useState(0)
  const [{ columns, rows }, setColumnsRows] = useState({ columns: 4, rows: 4 })
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

  const addMove = () => {
    setMoves(moves + 1)
  }

  const playAgain = () => {
    setGameFinnished(false)
    generateNewGrid()
    setMoves(0)
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

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <h1>15 - Puzzle</h1>
        <p>by Ida Lam</p>
        <h2>
          Current moves :
          {' '}
          { moves }
        </h2>
        <InputFields colRow={{ columns, rows }} setColumnsRows={setColumnsRows} />
        <Button variant="outlined" onClick={() => { return generateNewGrid() }}>Shuffle</Button>
        {gameFinnished
      && <Finnised moves={moves} playAgain={playAgain} />}
        <LastTileContext.Provider value={lastTile}>
          <Puzzle grid={grid} addMove={addMove} setGrid={setGrid} />
        </LastTileContext.Provider>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
