export type GridCount = {
  rows: number,
  columns: number
}

export type MoveTile = { grid: GridType, tile: number, lastTile: number, name: number }

export type RowType = number[]
export type GridType = RowType[]
export type GeneratedGridType = { grid: RowType[], answer: number[] }
export type GridIndexes = {
  column: number,
  row: number
}

export type ValidTiles = GridIndexes[]
export type IsTileMovable = {
  tile: GridIndexes,
  emptyTile: GridIndexes
}
export type ShuffleTiles = {
  tiles: number[],
  answer: number[]
}
