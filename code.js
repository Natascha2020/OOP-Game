class Game {
  constructor(player1, player2) {
    this._player1 = player1;
    this._player2 = player2;
  }

  // Start function
  startTheGame() {
    console.log(`${this._player1._name} against ${this._player2._name}`);
  }

  player1PickMove(movePlayer1) {
    this._player1.pickMove(movePlayer1);
  }

  player2PickMove(movePlayer2) {
    this._player2.pickMove(movePlayer2);
  }

  startRound(movePlayer1, movePlayer2) {
    this.player1PickMove(movePlayer1); // check if player picked the move
    this.player2PickMove(movePlayer2); // check if player picked the move

    // Check even
    if (this._player1._move._move === this._player2._move._move) {
      console.log("Even, pick another move");
    } else {
      // If not even, execute checkwinner
      this.checkWinner();
    }
    if (this._player1._wins === 2) {
      console.log("Player 1 has won the game!");
    } else if (this._player2._wins === 2) {
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
class Player {
  constructor(name, wins = 0) {
    this._name = name;
    this._wins = wins;
  }
  //pickMove(possible move)
  pickMove(moveName) {
    this._move = new Move(moveName); // new Move("scissors");
  }
}

class Move {
  constructor(move) {
    this._move = move;
  }
}

// Declaring the Players instances
const player1 = new Player("player1");
const player2 = new Player("player2");

const game = new Game(player1, player2);
