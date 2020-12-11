import { ConnectFour } from "./connect-four"

describe('Connect Four game', () => {
  describe('Beginning a game', () => {
    it('Initialises with an empty board, 7 columns and 6 rows', () => {
      const game = new ConnectFour()
      expect(game.getBoard()).toEqual([
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ])
    })
  })

  describe('Playing the game', () => {
    it('', () => {
      
    })
  })
})