import {
  GeneratedGridType,
  GridCount,
  GridIndexes,
  GridType,
  IsTileMovable,
  MoveTile,
  ShuffleTiles,
  ValidTiles,
} from '../types/puzzle'

export const shuffleTiles = ({ rows, columns }: GridCount): ShuffleTiles => {
  const totalTiles = rows * columns
  const tiles: number[] = []

  //   Create tiles
  for (let tile = 1; tile <= totalTiles; tile += 1) {
    tiles.push(tile)
  }

  const answer = [...tiles]

  //   Shuffles tiles with Fisher-Yates algorith
  for (let tile = tiles.length - 1; tile > 0; tile -= 1) {
    const j = Math.floor(Math.random() * (tile + 1));
    const temp = tiles[tile];

    tiles[tile] = tiles[j];
    tiles[j] = temp;
  }

  return { tiles, answer }
}

export const generateGrid = ({ rows, columns }: GridCount): GeneratedGridType => {
  const grid = []
  const { tiles, answer } = shuffleTiles({ rows, columns })

  //   Generate grid out of shuffled tiles
  for (let row = 1; row <= rows; row += 1) {
    const startTileIndex = (row * columns) - columns
    const endTileIndex = row * columns

    grid.push(tiles.slice(startTileIndex, endTileIndex))
  }

  return { grid, answer }
}

export const findIndex = ({ grid, tile }: { grid: GridType, tile: number }): GridIndexes => {
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

export const isTileMovable = ({ tile, emptyTile }: IsTileMovable) => {
  const validTiles: ValidTiles = [
    { row: emptyTile.row - 1, column: emptyTile.column },
    { row: emptyTile.row + 1, column: emptyTile.column },
    { row: emptyTile.row, column: emptyTile.column - 1 },
    { row: emptyTile.row, column: emptyTile.column + 1 },
  ]

  if (JSON.stringify(tile) === JSON.stringify(emptyTile)) {
    return false
  }

  const tileFound = validTiles.find((validTile) => {
    return JSON.stringify(validTile) === JSON.stringify(tile)
  })

  return !!tileFound
}

export const moveTile = ({
  grid, tile, lastTile, name,
} : MoveTile) => {
  const indexOfTile = findIndex({ grid, tile })
  const indexOfEmptyTile = findIndex({ grid, tile: lastTile })

  const isMovable = isTileMovable({ tile: indexOfTile, emptyTile: indexOfEmptyTile })

  if (isMovable) {
    // swap indexes of tiles
    const newGrid = grid.map((row, rowIndex) => {
      return row.map((rowTile, tileIndex) => {
        if (rowIndex === indexOfEmptyTile.row && tileIndex === indexOfEmptyTile.column) {
          return name
        }

        if (rowIndex === indexOfTile.row && tileIndex === indexOfTile.column) {
          return lastTile
        }

        return rowTile
      })
    })

    return newGrid
  }

  return null
}
