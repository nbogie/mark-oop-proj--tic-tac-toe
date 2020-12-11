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
}

type Marker = 'X' | 'O'
type Cell = '' | Marker

type Row = Cell[]
type Board = [Row, Row, Row]