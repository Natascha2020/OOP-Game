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
  // startTheGame() {
  // console.log(`${this._player1} against ${this._player2} , round ${this._roundNumber}`)
  // }
  //
  //  displayWinner(){
  // If a player wins 2 times, return the winner player
  //   }
}

class Player {
  constructor(name, move, roundsWon) {
    this._name = name;
    this._move = move;
    this._roundsWon = roundsWon;
  }

  //pickMove(possible move){
  // The player will pickup one of the available moves, selection will be displayed, moves are "scissors","paper","rock"
  // }

  // winnings(){
  //display counts total of winnings
  // }
}

class Move {
  constructor(move) {
    this._move = move;
  }

  // checkEven will check if 2 moves are with the same "play" Must be first
  checkEven() {
    // If round has 2 same moves, round restarts
  }

  // CheckWinner will check the winner (the move that is superior to the other)
  checkWinner() {
    // If rock is out with scissors = rock wins and check between player1 and player2 who has the rock
    // If scissors is out with paper = scissors wins and check between player1 and player2 who has the scissors
    // If paper is out with rock = paper wins and check between player1 and player2 who has the paper
  }
}

// Declaring the move instances
const scissors = new Move("scissors");
const paper = new Move("paper");
const rock = new Move("rock");

// Declaring the Players instances
const player1 = new Player("player1", "move", "roundsWon");
const player2 = new Player("player2", "move", "roundsWon");
