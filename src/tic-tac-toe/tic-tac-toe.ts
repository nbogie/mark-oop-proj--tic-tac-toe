interface ITicTacToe {
  addMarker(position: BoardPosition): void
  getBoard(): Board
  playStatus(): string
  // playStatus(): { isFinished: boolean, turnPlayer?: Marker, winner?: Marker }
}

export class TicTacToe implements ITicTacToe {
  board: Board

  constructor() {
    const emptyRow: Row = ['', '', '']
    this.board = [
      [...emptyRow],
      [...emptyRow],
      [...emptyRow]
    ]
  }

  allEqualTo(marker: Marker, positions: BoardPosition[]): boolean {
    return positions.every(position => (
      this.readCell(position) === marker
    ))
  }

  findWinner(): Marker | undefined {
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

    const winCombinations = [
      ...rowWins,
      ...colWins
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

  addMarker({ row, col }: BoardPosition): void {
    if (this.readCell({ row, col }) === '') {
      this.writeCell({ row, col }, this.getTurnPlayer())
    } else {
      console.log("There's already a marker there - try placing somewhere else!")
    }
  }

  getBoard(): Board {
    return this.board
  }

  getTurnPlayer(): Marker {
    const isEvenTurn = this.getTurnCount() % 2 === 0

    return isEvenTurn ? 'X' : 'O'
  }

  getTurnCount(): number {
    return this.board.reduce(
      (acc, row) => {
        const markersPlayed = row.filter(cell => ['X', 'O'].includes(cell))
        return acc + markersPlayed.length
      }
    , 0)
  }

  playStatus(): string {
    const winner = this.findWinner()
    if (winner) {
      return `Finished - ${winner} is the winner!`
    } else {
      return `Ongoing - ${this.getTurnPlayer()}'s turn`
    }
  }

  readCell({ row, col }: BoardPosition): Cell {
    // subtract one as row and col are not zero-based
    return this.board[row - 1][col - 1]
  }

  writeCell({ row, col }: BoardPosition, marker: Marker): void {
    this.board[row - 1][col - 1] = marker
  }
}

type Marker = 'X' | 'O'
type Cell = '' | Marker

type Row = [Cell, Cell, Cell]
type Board = [Row, Row, Row]

interface BoardPosition {
  /* Non-zero based row number */
  row: number,
  /* Non-zero based column number */
  col: number
}