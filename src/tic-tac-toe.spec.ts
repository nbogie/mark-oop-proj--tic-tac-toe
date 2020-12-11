import { TicTacToe } from "./tic-tac-toe"

describe('Core TicTacToe tests', () => {
  describe('Initialising', () => {
    const game = new TicTacToe()

    it('Creates an empty board', () => {
      expect(game.getBoard()).toEqual([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ])
    })

    it('Starts with X as the turn player', () => {
      expect(game.getTurnPlayer()).toBe('X')
    })

    it("Reports the game status as ongoing", () => {
      expect(game.playStatus()).toBe("Ongoing - X's turn")
    })
  })

  describe('Playing', () => {
    const game = new TicTacToe()
    
    it('Can add markers as specified', () => {
      game.addMarker({ row: 2, col: 2 })
      expect(game.getBoard()).toEqual([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', '']
      ])
    })

    it('Logs out a message when an occupied cell is attempted', () => {
      console.log = jest.fn();
      game.addMarker({ row: 2, col: 2 })
      expect(console.log).toHaveBeenCalledWith("There's already a marker there - try placing somewhere else!");
    })

    it("Plays an O on the second marker placed", () => {
      game.addMarker({ row: 2, col: 3 })
      expect(game.getBoard()).toEqual([
        ['', '', ''],
        ['', 'X', 'O'],
        ['', '', '']
      ])
    })
  })

  describe('Victory', () => {
    it('Detects a first row win', () => {
      const game = new TicTacToe()
      game.addMarker({ row: 2, col: 2 })
      game.addMarker({ row: 1, col: 1 })
      game.addMarker({ row: 3, col: 1 })
      game.addMarker({ row: 1, col: 2 })
      game.addMarker({ row: 3, col: 3 })
      game.addMarker({ row: 1, col: 3 })
      expect(game.getBoard()).toEqual([
        ['O', 'O', 'O'],
        ['', 'X', ''],
        ['X', '', 'X']
      ])
      expect(game.playStatus()).toBe('Finished - O is the winner!')
    })

    it('Detects a diagonal win', () => {
      const game = new TicTacToe()
      game.addMarker({ row: 2, col: 2 })
      game.addMarker({ row: 1, col: 3 })
      game.addMarker({ row: 3, col: 3 })
      game.addMarker({ row: 1, col: 2 })
      game.addMarker({ row: 1, col: 1 })
      expect(game.getBoard()).toEqual([
        ['X', 'O', 'O'],
        ['', 'X', ''],
        ['', '', 'X']
      ])
      expect(game.playStatus()).toBe('Finished - X is the winner!')
    })

  })
})