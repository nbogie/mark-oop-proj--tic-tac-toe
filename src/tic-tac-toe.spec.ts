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
})