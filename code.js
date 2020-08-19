// // Roshambo's Game

// // 3 Classes:
// // - Game
// // - Player
// // - Move

// // --- Game ---
// // Properties = Player1 & Player2 , Roundnumbers
// // Methods = Start Round , New Round , Display Winner

// // --- Player ---
// // Properties = playerName , move , TotalOfRoundsWon , TotalOfRoundsLost
// // Methods = TriggerMove

// // --- Move ---
// // Properties = MoveName

// // Instance of Player = Player1 and Player2

// // Instance of Move = Rock - Scissors - Paper

class Game {
  constructor(player1, player2, roundNumbers) {
    this._player1 = player1;
    this._player2 = player2;
    this._roundNumbers = roundNumbers;
  }

  // Start function
  startTheGame() {
    console.log(`${this._player1._name} against ${this._player2._name} , rounds ${this._roundNumbers}`);
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

    // if countround is = to 3{
      // check who has more winnings
    }
  
  }
  // CheckWinner will check the winner (the declared move that is superior to the other)
  checkWinner() {
    let player1winnings = 0;
    let player2winnings = 0;
    if (this._player1._move._move === "rock" && this._player2._move._move === "scissors") {
      console.log("Player1 Wins");
      player1winnings += 1;
      console.log(player1winnings);
    } else if (this._player2._move._move === "rock" && this._player1._move._move === "scissors") {
      console.log("Player2 Wins");
      player2winnings += 1;
      console.log(player2winnings);
    } else if (this._player1._move._move === "scissors" && this._player2._move._move === "paper") {
      console.log("Player1 Wins");
      player1winnings += 1;
    } else if (this._player2._move._move === "scissors" && this._player1._move._move === "paper") {
      console.log("Player2 Wins");
      player2winnings += 1;
      console.log(player2winnings);
    } else if (this._player1._move._move === "paper" && this._player2._move._move === "rock") {
      console.log("Player1 Wins");
      player1winnings += 1;
    } else if (this._player2._move._move === "paper" && this._player1._move._move === "rock") {
      console.log("Player2 Wins");
      player2winnings += 1;
      console.log(player2winnings);
    }
  }
}
class Player {
  constructor(name) {
    this._name = name;
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

const game = new Game(player1, player2, 3);
