interface ITicTacToe {
  addMarker(position: BoardPosition): void
  getBoard(): Board
  playStatus(): string
}

/**
 * A Tic Tac Toe game.
 */
class TicTacToe implements ITicTacToe {
  board: Board

  /**
   * Initialise a new game with an empty board
   */
  constructor() {
    const emptyRow: Row = ['', '', '']
    this.board = [
      [...emptyRow],
      [...emptyRow],
      [...emptyRow]
    ]
  }

  /**
   * A helper query to heck whether a series of board positions
   *  are all equal to a given marker.
   * 
   * This is useful, for example, to check whether a player has
   *  won in a given fashion - pass in an array of the positions
   *  e.g. for every cell in a row. 
   * 
   * @param marker The marker to check for equality to
   * @param positions A array of board positions to check
   */
  allEqualTo(marker: Marker, positions: BoardPosition[]): boolean {
    return positions.every(position => (
      this.readCell(position) === marker
    ))
  }

  /**
   * A helper query that returns either a Marker ('X' or 'O')
   *  that is deemed to have won, or returns undefined if there
   *  is no current winner.
   * 
   * @returns a string Marker if there is a winner;
   *  undefined otherwise
   */
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

  /**
   * A command that adds a marker for the turn player
   *  at coordinates specified, if possible.
   * 
   * If the coordinates are already occupied, it ignores
   *  the placement.
   * 
   * @param param0 Board position to try to play at
   */
  addMarker({ row, col }: BoardPosition): void {
    if (this.readCell({ row, col }) === '') {
      this.writeCell({ row, col }, this.getTurnPlayer())
    } else {
      console.log("There's already a marker there - try placing somewhere else!")
    }
  }

  /**
   * A helper query to encapsulate the board game state
   */
  getBoard(): Board {
    return this.board
  }

  /**
   * A helper query to return the marker for the current
   *  turn player.
   * 
   * @returns a string representing the current turn player
   */
  getTurnPlayer(): Marker {
    const isEvenTurn = this.getTurnCount() % 2 === 0

    return isEvenTurn ? 'X' : 'O'
  }

  /**
   * A helper query to return the turn number of the game.
   * 
   * @returns the number of markers that have been played
   */
  getTurnCount(): number {
    return this.board.reduce(
      (acc, row) => {
        const markersPlayed = row.filter(cell => ['X', 'O'].includes(cell))
        return acc + markersPlayed.length
      }
    , 0)
  }

  /**
   * A helper query to return the play status of the game.
   * 
   * @returns a string describing the state of the game,
   *  either describing whose turn it is or announcing
   *  the winner.
   */
  playStatus(): string {
    const winner = this.findWinner()
    if (winner) {
      return `Finished - ${winner} is the winner!`
    } else {
      return `Ongoing - ${this.getTurnPlayer()}'s turn`
    }
  }

  /**
   * A helper query to read the board at a given position.
   * 
   * @param param0 Board position to read from
   */
  readCell({ row, col }: BoardPosition): Cell {
    // subtract one as row and col are not zero-based
    return this.board[row - 1][col - 1]
  }

  /**
   * A helper command to write to a cell on the board.
   * 
   * @param param0 Board position to write at
   * @param marker Marker to write with
   */
  writeCell({ row, col }: BoardPosition, marker: Marker): void {
    this.board[row - 1][col - 1] = marker
  }
}

/**
 * Represents a given player.
 */
type Marker = 'X' | 'O'

/**
 * Represents a cell on the Tic Tac Toe board.
 *  The empty string represents an empty cell.
 *  A marker represents a player who has played there
 */
type Cell = '' | Marker

/**
 * Represents a row on the Tic Tac Toe board.
 */
type Row = [Cell, Cell, Cell]

/**
 * Represents the 3 x 3 Tic Tac Toe board.
 */
type Board = [Row, Row, Row]

/**
 * Represents non-zero based coordinates for
 *  a given board cell.
 */
interface BoardPosition {
  /** Non-zero based row number */
  row: number,

  /** Non-zero based column number */
  col: number
}