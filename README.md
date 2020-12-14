# Academy Project: Tic Tac Toe
**Module:** Object-oriented programming || **Level:** 1

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

## Context

You work for a game development company.

You have inherited a Tic Tac Toe project that was started during a small internal hackathon, which the company would like to polish up.

The software engineer who developed the codebase has left, so you can't ask her questions...

... but there appear to be some helpful files left under `/src`:
1. `INSTRUCTIONS.md`: a brief guide to setup and installation;
2. `tic-tac-toe.ts`: the main code and some documentation; and
3. `tic-tac-toe.spec.ts`: some written tests to accompany the code.

## Exercise 1: Newcomer Notes

**Your deliverable will be a document named `NEWCOMER_NOTES.md`**.

Your first task is to spend some time with the codebase, forming some observations, questions and ideas about the project and how it currently works (or could/should).

You might find it helpful to check your understanding by considering the following prompts:

1. Can you load a game and play through it? Does it behave as you expect?
2. The interface lists three methods, but the actual class implementation has many more. What is the purpose of having those?
3. What is the strategy used for figuring out which player's turn it is?
4. The code documents 'non-zero based' quite a few times. What does it mean and why do you think this has been done?
5. What is the job of the `allEqualTo` method?

although your observations and ideas should go beyond these questions!

You can use a succinct writing style, as long as you consider it understandable in the context of team work.

This exercise will help you take ownership of the project, and help us understand your thought process.

## Exercise 2: Backlog

**Your deliverable will be commits of code and documentation in response to chosen items.**

Title | Description | Goal | Estimated difficulty
--- | --- | --- | ---
**Testing for column wins** | Our Tic Tac Toe game has a test for a row win, but it doesn't have a test written for a column wins. | Write a test to check that it detects a column win. | ⭐️
**Diagonal wins** | Our Tic Tac Toe game needs to be able to detect when any valid win happens (rows, columns and diagonals). <br /><br /> There is one test written for this, `'Detects a diagonal win'`, but it is currently being skipped - it fails when it is run. | Implement a fix so that the game detects diagonal wins and the test passes. | ⭐️
**Print board** | To play the game, users need to be able to check the current board. <br /><br /> The `.getBoard()` method returns the array representation of the board, but our players (with no coding experience) are finding it hard to understand what this means. <br /><br /> It seems that the previous maintainer left a related TODO, under `.printBoard()`, with a previous test (currently skipped). | Complete the `.printBoard()` method to pass the test, and document it in the public interface so that it's easy for others to quickly refer to and use. | ⭐️
**Valid inputs** | Our Tic Tac Toe board is 3 x 3, which means playing in row 100 is clearly invalid. <br /><br /> Currently, though, our `.addMarker` method accepts positions with *any* numeric row or column, including negatives and decimals! | Write some tests and edit the `.addMarker` method to ensure that only sensible row and column numbers get used when writing to the board. | ⭐️⭐️
**Status reporting** | Currently, the `.getStatus()` method returns a descriptive string. <br /><br /> A team-mate wants to use the status information, but she is finding it annoying to have to parse the string. | Rewrite `.getStatus()` so that it instead returns an object of type `{ isComplete: boolean, turnPlayer?: Marker, winner?: Marker }`, and make changes to the associated tests | ⭐️⭐️
**Handle draws** | At the moment, the game only reports 'wins' and 'ongoing' - but Tic Tac Toe often ends in a draw! | Write the tests and code to handle draws in some sensible way | ⭐️⭐️
**Remove reduce** | Currently, there are a couple of `.reduce` methods scattered throughout the code, which some junior members of your team have found it difficult to maintain or debug. | Refactor the code to replace all `.reduce` calls with imperative programming constructs | ⭐️⭐️⭐️
