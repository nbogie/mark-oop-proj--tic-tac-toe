interface IConnectFour {
  addMarker(position: BoardPosition): void
  getBoard(): Board
  playStatus(): { isFinished: boolean, turnPlayer?: Marker, winner?: Marker }
}

export class ConnectFour implements IConnectFour {

}

type Marker = 'X' | 'O'
type Cell = '' | Marker

type Row = [Cell, Cell, Cell, Cell, Cell, Cell]
type Board = [Row, Row, Row, Row, Row, Row]

interface BoardPosition {
  /* Non-zero based row number */
  row: number,
  /* Non-zero based column number */
  col: number
}