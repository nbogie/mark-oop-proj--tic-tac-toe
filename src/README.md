# Tic Tac Toe

## Example
Create a new game
```ts
const game = new TicTacToe()
```

Starts with X by default
```ts
game.getStatus()
// => "Ongoing - X's turn"
```

Play a counter in a given row and column
```ts
game.addMarker({ row: 1, col: 2 })
```

Check the current board placements
```ts
game.getBoard()
// => [['', 'X', ''], ['', '', ''], ['', '', '']]
```

Keep playing
```ts
game.addMarker({ row: 2, col: 2 })
game.addMarker({ row:1, col: 3 })

game.getBoard()
// => [['', 'X', 'X'], ['', 'O', ''], ['', '', '']]

game.getStatus()
// => "Ongoing - O's turn"

game.addMarker({ row: 3, col: 2 })
game.addMarker({ row: 1, col: 1 })
game.getBoard()
// => [['X', 'X', 'X'], ['', 'O', ''], ['', 'O', '']]

game.getStatus()
// => "Finished - X is the winner!"
```

## Usage
To play locally, run a `ts-node` REPL and load the file.

*Run a `ts-node` REPL*
```bash
ts-node
```

*Load the game code into the REPL*
```
> .load src/tic-tac-toe/tic-tac-toe.ts
```

*You're ready to play!*