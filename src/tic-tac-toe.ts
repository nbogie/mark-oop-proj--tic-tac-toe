interface ITicTacToe {
  addMarker(position: BoardPosition): void
  getBoard(): Board
  playStatus(): string
  // playStatus(): { isFinished: boolean, turnPlayer?: Marker, winner?: Marker }
}

export class TicTacToe implements TicTacToe {
  private board: Board

  constructor() {
    const emptyRow: Row = Array(3).fill('')
    this.board = [
      [...emptyRow],
      [...emptyRow],
      [...emptyRow]
    ]
  }

  private allEqualTo(marker: Marker, positions: BoardPosition[]): boolean {
    return positions.every(position => (
      this.readCell(position) === marker
    ))
  }

  private findWinner(): Marker | undefined {
    const rowWins = [
      [[1, 1], [1, 2], [1, 3]],
      [[2, 1], [2, 2], [2, 3]],
      [[3, 1], [3, 2], [3, 3]]
    ]

    const colWins = [
      [[1, 1], [2, 1], [3, 1]],
      [[1, 2], [2, 2], [3, 2]],
      [[1, 3], [2, 3], [3, 3]]
    ]

    const diagWins = [
      [[1, 1], [2, 2], [3, 3]],
      [[1, 3], [2, 2], [3, 1]]
    ]

    const winCombinations = [
      ...rowWins,
      ...colWins,
      ...diagWins
    ]

    for (let coordArr of winCombinations) {
      const boardPositions = coordArr.map(([row, col]) => ({ row, col }))
      const xWins = this.allEqualTo('X', boardPositions)
      const oWins = this.allEqualTo('O', boardPositions)
      if (xWins) {
        return 'X'
      } else if (oWins) {
        return 'O'
      }
    }

    return undefined
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

  public playStatus(): string {
    const winner = this.findWinner()
    if (winner) {
      return `Finished - ${winner} is the winner!`
    } else {
      return `Ongoing - ${this.getTurnPlayer()}'s turn`
    }
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