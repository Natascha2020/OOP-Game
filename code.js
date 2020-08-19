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
    console.log(`${this._player1} against ${this._player2} , round ${this._roundNumber}`);
  }
}

class Player {
  constructor(name, move, roundsWon) {
    this._name = name;
    this._move = move;
    this._roundsWon = roundsWon;
  }

  //pickMove(possible move)
  // The player will pickup one of the available moves, selection will be displayed, moves are "scissors","paper","rock"

  pickMove(moveName) {
    this._move = new Move(moveName);

    switch (this._move) {
      case scissors:
        console.log(`${this._name} picked scissors`);
        break;
      case paper:
        console.log(`${this._name} picked paper`);
        break;
      case rock:
        console.log(`${this._name} picked rock`);
        break;
      default:
        console.log("Please pick a valid move: scissors, paper or rock!");
    }
  }

  // winnings(){
  //display counts total of winnings
  // }
  winnings() {
    this._roundsWon += 1;
    console.log(`${this._name} has already won ${this._roundsWon} rounds!`);

    if (this._roundswon >= 2) {
      console.log(`${this._name} has won the game! Congrats!!!`);
    }
  }
}

class Move {
  constructor(move) {
    this._move = move;
  }

  // checkEven will check if 2 moves are with the same "play" Must be first to be executed
  checkEven(player1_move, player2_move) {
    if (player1_move === player2_move) {
      return evenTie;
    }
  }

  // CheckWinner will check the winner (the declared move that is superior to the other)
  checkWinner(player1_move, player2_move) {
    if ((player1_move === rock) & (player2_move === scissors)) {
      return player1Win;
    } else if ((player2_move === rock) & (player1_move === scissors)) {
      return player2Win;
    } else if ((player1_move === scissors) & (player2_move === paper)) {
      return player1Win;
    } else if ((player2_move === scissors) & (player1_move === paper)) {
      return player2Win;
    } else if ((player1_move === paper) & (player2_move === rock)) {
      return player1Win;
    } else if ((player2_move === paper) & (player1_move === rock)) {
      return player2Win;
    }
  }
}

// Declaring the move instances
const scissors = new Move("scissors");
const paper = new Move("paper");
const rock = new Move("rock");

// Review (const listOfMove = [(scissors = new Move("scissors")), (rock = new Move("rock")), (paper = new Move("paper"))];

// Declaring the Players instances
const player1 = new Player("player1");
const player2 = new Player("player2");

const game = new Game("player1", "player2", "2");

console.log(player1.pickMove());
