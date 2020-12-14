# Tic Tac Toe


## Playing a game
Create a new game
```ts
const game = new TicTacToe()
```

Starts with X by default
```ts
game.playStatus()
// => "Ongoing - X's turn"
```

Play a counter in a given row and column
```ts
game.addMarker({ row: 1, col: 2 })
```

