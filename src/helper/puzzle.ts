type ParamsGrid = {
  rows: number,
  columns: number
}

export type RowType = number[]
export type GridType = RowType[]

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
