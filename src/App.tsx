import React, { useState } from 'react'
import './App.css'
import Grid from './components/grid'
import { generateGrid } from './helper/puzzle'
import 'normalize.css'

function App() {
  const [moves] = useState(0)
  // const [reShuffle, setReShuffle] = useState(false)
  const [{ columns, rows }] = useState({ columns: 4, rows: 4 })
  const [grid] = useState(generateGrid({ rows, columns }))

  return (
    <div className="App">
      <p>
        moves
        {' '}
        {moves}
      </p>
      <Grid grid={grid} />
    </div>
  )
}

export default App
