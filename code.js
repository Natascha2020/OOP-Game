// ============ Intro ============ //

// As usual weekly assignment here following is the Js code that runs the game.
// The game is called Roshambo (or Rock, Paper, Scissors) and it works likt this:
// - Rock beats Scissors
// - Scissors beats Paper
// - Paper beats Rock
//
// Number of players: 2 (or more if you want to have fun with more people), Rounds are usually 3 but can also be 5, 9, 25, 97.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Creation of the class Game
class Game {
  constructor(player1, player2, maxRounds = 0) {
    this._player1 = player1;
    this._player2 = player2;
    this._maxRounds = maxRounds;
  }

  // Start game, function displays players and best of rounds
  startTheGame() {
    console.log(`${this._player1._name} against ${this._player2._name}, Best of ${this._maxRounds}`);
  }

  // Function that record the move that player1 picked up
  player1PickMove(movePlayer1) {
    this._player1.pickMove(movePlayer1);
  }
  // Function that record the move that player2 picked up
  player2PickMove(movePlayer2) {
    this._player2.pickMove(movePlayer2);
  }

  // Start of the round
  // 1. The function will check first which moves has been picked
  startRound(movePlayer1, movePlayer2) {
    this.player1PickMove(movePlayer1); // check if player picked the move
    this.player2PickMove(movePlayer2); // check if player picked the move

    // 2. Function will check first if two moves are even
    if (this._player1._move._move === this._player2._move._move) {
      console.log("Even, pick another move!");
    } else {
      // 3. If not even go to checkWinner method so it can check who won
      this.checkWinner();
    }

    // 4. Winnings counter, it takes the total wins and compares to the rounds previously stated
    if (this._player1._wins > this._maxRounds / 2) {
      console.log("Player 1 has won the game!");
    } else if (this._player2._wins > this._maxRounds / 2) {
      console.log("Player 2 has won the game!");
    }
  }

  // CheckWinner will check the winner (the declared move that is superior to the other)
  checkWinner() {
    if (this._player1._move._move === "rock" && this._player2._move._move === "scissors") {
      console.log("Player1 Wins");
      this._player1._wins += 1;
      console.log(this._player1._wins);
    } else if (this._player2._move._move === "rock" && this._player1._move._move === "scissors") {
      console.log("Player2 Wins");
      this._player2._wins += 1;
      console.log(this._player2._wins);
    } else if (this._player1._move._move === "scissors" && this._player2._move._move === "paper") {
      console.log("Player1 Wins");
      this._player1._wins += 1;
      console.log(this._player1._wins);
    } else if (this._player2._move._move === "scissors" && this._player1._move._move === "paper") {
      console.log("Player2 Wins");
      this._player2._wins += 1;
      console.log(this._player2._wins);
    } else if (this._player1._move._move === "paper" && this._player2._move._move === "rock") {
      console.log("Player1 Wins");
      this._player1._wins += 1;
      console.log(this._player1._wins);
    } else if (this._player2._move._move === "paper" && this._player1._move._move === "rock") {
      console.log("Player2 Wins");
      this._player2._wins += 1;
      console.log(this._player2._wins);
    }
  }
}

// Creation of Player Class
class Player {
  constructor(name, wins = 0) {
    this._name = name;
    this._wins = wins;
  }

  // Function that records onto player's profile the choice they made during the startRound()
  pickMove(moveName) {
    this._move = new Move(moveName); // new Move("scissors");
  }
}

// Creation of Move Class
class Move {
  constructor(move) {
    this._move = move;
  }
}

// Declaring the Players names
const player1 = new Player("player1");
const player2 = new Player("player2");

// Inizialitaion of game
const game = new Game(player1, player2, 5);
