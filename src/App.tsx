import React, { useState } from 'react'
import './App.css'
import Puzzle from './components/puzzle'
import { generateGrid } from './helper/puzzle'
import 'normalize.css'
import LastTileContext from './contexts/lastTile'

function App() {
  const [moves] = useState(0)
  // const [reShuffle, setReShuffle] = useState(false)
  const [{ columns, rows }] = useState({ columns: 4, rows: 4 })
  const [grid] = useState(generateGrid({ rows, columns }))
  const [lastTile] = useState(columns * rows)

  // options for col and rows
  return (
    <div className="App">
      <p>
        moves
        {' '}
        {moves}
      </p>
      <LastTileContext.Provider value={lastTile}>
        <Puzzle grid={grid} />
      </LastTileContext.Provider>
    </div>
  )
}

export default App
