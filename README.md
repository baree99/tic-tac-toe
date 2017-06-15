# Tic Tac Toe

Business logic for a Tic Tac Toe game. I used [magic square](https://en.wikipedia.org/wiki/Magic_square) to determine the winner:

|     |**A**|**B**|**C**|
| --- | --- | --- | --- |
|**1**|  4  |  9  |  2  |
|**2**|  3  |  5  |  7  |
|**3**|  8  |  1  |  6  |

A player won a game, when 3 of the player's claimed field's values add up to 15.

## Features

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

## Getting started

```
git clone git@github.com:baree99/tic-tac-toe.git
npm install
```

## Running tests

```
mocha
```

## How the code is used

```
> const Game = require('./model/game')
> var game = new Game()
> game.player1.name
'X'
> game.player2.name
'O'
> game.turn.name
'X'
> game.claimField('a1')
> game.turn.name
'O'
> game.claimField('a2')
> game.claimField('b1')
> game.claimField('b3')
> game.player1.claimedFields
{ a1: 4, b1: 9 }
> game.player2.claimedFields
{ a2: 3, b3: 1 }
> game.claimField('b3')
'Field has already been taken'
> game.claimField('b2')
> game.claimField('a3')
> game.claimField('c3')
'X won, winning fields: a1,b2,c3'
```
```
> var game = new Game()
> game.claimField('b2');
> game.claimField('c1');
> game.claimField('c2');
> game.claimField('a2');
> game.claimField('a1');
> game.claimField('c3');
> game.claimField('a3');
> game.claimField('b1');
> game.claimField('b3')
'All fields has been taken'
```