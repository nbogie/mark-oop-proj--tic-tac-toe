export class TicTacToe {
  private board: Board

  constructor() {
    const emptyRow: Row = Array(3).fill('')
    this.board = [
      [...emptyRow],
      [...emptyRow],
      [...emptyRow]
    ]
  }

  public addMarker({ row, col }: BoardPosition): void {
    if (this.readCell({ row, col }) === '') {
      this.writeCell({ row, col }, this.getTurnPlayer())
    } else {
      console.log("There's already a marker there - try placing somewhere else!")
    }
  }

  public getBoard(): Board {
    return this.board
  }

  public getTurnPlayer(): Marker {
    const isEvenTurn = this.getTurnCount() % 2 === 0

    return isEvenTurn ? 'X' : 'O'
  }

  public getTurnCount(): number {
    return this.board.reduce(
      (acc, row) => {
        const markersPlayed = row.filter(cell => ['X', 'O'].includes(cell))
        return acc + markersPlayed.length
      }
    , 0)
  }

  private readCell({ row, col }: BoardPosition): Cell {
    // subtract one as row and col are not zero-based
    return this.board[row - 1][col - 1]
  }

  public writeCell({ row, col }: BoardPosition, marker: Marker): void {
    this.board[row - 1][col - 1] = marker
  }
}

type Marker = 'X' | 'O'
type Cell = '' | Marker

type Row = Cell[]
type Board = [Row, Row, Row]

interface BoardPosition {
  row: number,
  col: number
}