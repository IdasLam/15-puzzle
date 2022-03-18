type ParamsGrid = {
  rows: number,
  columns: number
}

type MoveTile = { grid: GridType, tile: number, lastTile: number }

export type RowType = number[]
export type GridType = RowType[]
export type GridIndexes = {
  column: number,
  row: number
}

export const shuffleTiles = ({ rows, columns }: ParamsGrid) => {
  const totalTiles = rows * columns
  const tiles: number[] = []

  //   Create tiles
  for (let tile = 1; tile <= totalTiles; tile += 1) {
    tiles.push(tile)
  }

  //   Shuffles tiles with Fisher-Yates algorith
  for (let tile = tiles.length - 1; tile > 0; tile -= 1) {
    const j = Math.floor(Math.random() * (tile + 1));
    const temp = tiles[tile];

    tiles[tile] = tiles[j];
    tiles[j] = temp;
  }

  return tiles
}

export const generateGrid = ({ rows, columns }: ParamsGrid): GridType => {
  const grid = []
  const tiles = shuffleTiles({ rows, columns })

  //   Generate grid out of shuffled tiles
  for (let row = 1; row <= rows; row += 1) {
    const startTileIndex = (row * columns) - columns
    const endTileIndex = row * columns

    grid.push(tiles.slice(startTileIndex, endTileIndex))
  }

  return grid
}

export const findIndex = ({ grid, tile }: { grid: GridType, tile: number }): GridIndexes | void => {
  let foundColIndex = -1
  let foundRowIndex = -1

  grid.forEach((row, rowIndex) => {
    row.forEach((gridTile, tileIndex) => {
      if (tile === gridTile) {
        foundColIndex = tileIndex
        foundRowIndex = rowIndex
      }
    })
  });

  if (foundColIndex === -1 && foundRowIndex === -1) {
    throw new Error('Index was not found')
  }

  return { row: foundRowIndex, column: foundColIndex }
}

export const moveTile = ({ grid, tile, lastTile } : MoveTile) => {
  const indexOfTile = findIndex({ grid, tile })
  const indexOfEmptyTile = findIndex({ grid, tile: lastTile })

  console.log({ indexOfTile, indexOfEmptyTile })
}
