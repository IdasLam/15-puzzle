import React, { useState } from 'react'
import './App.css'
import Puzzle from './components/puzzle'
import { generateGrid } from './helper/puzzle'
import 'normalize.css'
import LastTileContext from './contexts/lastTile'

function App() {
  const [moves, setMoves] = useState(0)
  // const [reShuffle, setReShuffle] = useState(false)
  const [{ columns, rows }] = useState({ columns: 4, rows: 4 })
  const [grid] = useState(generateGrid({ rows, columns }))
  const [lastTile] = useState(columns * rows)

  const addMove = () => {
    setMoves(moves + 1)
  }

  // options for col and rows
  return (
    <div className="App">
      <p>
        moves
        {' '}
        {moves}
      </p>
      <LastTileContext.Provider value={lastTile}>
        <Puzzle grid={grid} addMove={addMove} />
      </LastTileContext.Provider>
    </div>
  )
}

export default App
