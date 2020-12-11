import { TicTacToe } from "./tic-tac-toe"

describe('Tic Tac Toe game', () => {
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
})