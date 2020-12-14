# Tic Tac Toe

Please allocate yourself a **limited and reasonable timeframe** to work on the challenge, which **should not exceed two hours**.

During this timeframe, you are expected to perform the following, in order:

1. read and understand the context
2. complete exercise 1 (about 25% of your allocated timeframe)
3. complete exercise 2 (about 75% of your allocated timeframe)

Bonuses may be worked on at any point.

## Context

You work for a game development company.

You have inherited a Tic Tac Toe codebase, with some tickets to complete on it (a failing test and some feature requests).

The software engineer who was working on the codebase previously has left, so you can't ask them questions, but there is:
1. `README.md`: a brief example of using; and
2. `tic-tac-toe.ts`: the main code and some documentation;
3. `tic-tac-toe.spec.ts`: some written tests to accompany the code.

## Exercise 1: Newcomer Notes

Your first task is to spend some time with the codebase, forming some observations, questions and ideas about the project and how it currently works (or could/should).

**Your deliverable will be a document named `NEWCOMER_NOTES.md`**.

We expect you to picture yourself as the new project owner, and express yourself as truly as possible, so please feel free to not be shy.

You can use a succinct writing style, as long as you consider it understandable in the context of team work.

This exercise will help you take ownership of the project, and help us understand your thought process.

## Exercise 2: Backlog

The time you spend on this exercise should account for **about 75% of the timeframe** that you allocated for yourself (**~2/3 hours**).

As a second exercise, we would like you to complete at least two of the following backlog items, and commit your work.

You may use any external helper, library, or tool that you feel would benefit your work.

**Your deliverable will be commits of code and documentation in response to chosen items.**

Title | Description | Goal | Estimated difficulty
--- | --- | --- | ---
**Diagonal wins** | Our Tic Tac Toe game needs to be able to detect when any valid win happens (rows, columns and diagonals). <br /> There is one test written for this, `'Detects a diagonal win'`, but it is currently failing. | Implement a fix so that the game detects diagonal wins and the test passes. | ⭐️
**Print board** | To play the game, users need to be able to check the current board. <br /> The `.getBoard()` method returns the array representation of the board, but our players (with no coding experience) are finding it hard to understand what this means. | Complete the `.printBoard()` method to achieve this.  | ⭐️⭐️