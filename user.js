//Declaration of variables for Eventlistener
let startGame = document.getElementsByClassName("startGame")[0];
let rockOne = document.getElementsByClassName("rockOne")[0];
let paperOne = document.getElementsByClassName("paperOne")[0];
let scissorsOne = document.getElementsByClassName("scissorsOne")[0];
let rockTwo = document.getElementsByClassName("rockTwo")[0];
let paperTwo = document.getElementsByClassName("paperTwo")[0];
let scissorsTwo = document.getElementsByClassName("scissorsTwo")[0];
let moveOne = document.getElementsByClassName("moveOne")[0];
let moveTwo = document.getElementsByClassName("moveTwo")[0];
let nameOne = document.getElementsByClassName("nameOne")[0];
let nameTwo = document.getElementsByClassName("nameTwo")[0];
let winsOne = document.getElementsByClassName("winsOne")[0];
let winsTwo = document.getElementsByClassName("winsTwo")[0];
let checkWinner = document.getElementsByClassName("checkWinner")[0];
/* let buttonsOne = document.getElementsByClassName("buttonOne");
let buttonsTwo = document.getElementsByClassName("buttonTwo");
console.log(buttonsOne);
console.log(buttonsTwo); */

//EventListener for StartGame-Button
startGame.addEventListener("click", (e) => {
  game.startTheGame();
});

/* for (button of buttonsOne) {
  button.addEventListener("click", (e) => {
    game.player1PickMove(button.value);
    console.log(button.value);
  });
}

for (button of buttonsTwo) {
  button.addEventListener("click", (e) => {
    game.player1PickMove(button.value);
    console.log(button.value);
  });
} */

//EventListener for Rock, Paper, Scissor-Buttons
rockOne.addEventListener("click", (e) => {
  game.player1PickMove("Rock");
});

paperOne.addEventListener("click", (e) => {
  game.player1PickMove("Paper");
});

scissorsOne.addEventListener("click", (e) => {
  game.player1PickMove("Scissors");
});

rockTwo.addEventListener("click", (e) => {
  game.player2PickMove("Rock");
});

paperTwo.addEventListener("click", (e) => {
  game.player2PickMove("Paper");
});

scissorsTwo.addEventListener("click", (e) => {
  game.player2PickMove("Scissors");
});

//EventListener for Check-Winner-Button
checkWinner.addEventListener("click", (e) => {
  game.startRound(moveOne.innerText, moveTwo.innerText);
});

class Game {
  constructor(player1, player2, maxRounds = 3) {
    this._player1 = player1;
    this._player2 = player2;
    this._maxRounds = maxRounds;
  }

  // Start function
  startTheGame() {
    console.log(`${this._player1._name} against ${this._player2._name}: Best of ${this._maxRounds}`);
    alert(`${this._player1._name} against ${this._player2._name}: Best of ${this._maxRounds}`);
  }

  player1PickMove(movePlayer1) {
    this._player1.pickMove(movePlayer1);
    moveOne.innerHTML = ` ${movePlayer1}`;
  }

  player2PickMove(movePlayer2) {
    this._player2.pickMove(movePlayer2);
    moveTwo.innerHTML = ` ${movePlayer2}`;
  }

  startRound(movePlayer1, movePlayer2) {
    this.player1PickMove(movePlayer1); // check if player picked the move
    this.player2PickMove(movePlayer2); // check if player picked the move

    // Check even
    if (this._player1._move._move === this._player2._move._move) {
      console.log("Even, pick another move");
      alert("Even, pick another move");
    } else {
      // If not even, execute checkwinner
      this.checkWinner();
    }
    if (this._player1._wins > this._maxRounds / 2) {
      console.log("Player 1 has won the game!");
      alert("Player 1 has won the game!");
    } else if (this._player2._wins > this._maxRounds / 2) {
      console.log("Player 2 has won the game!");
      alert("Player 2 has won the game!");
    }
  }

  // CheckWinner will check the winner (the declared move that is superior to the other)

  checkWinner() {
    if (this._player1._move._move === "Rock" && this._player2._move._move === "Scissors") {
      console.log("Player1 Wins");
      this._player1._wins += 1;
      console.log(this._player1._wins);
      winsOne.innerHTML += 1;
    } else if (this._player2._move._move === "Rock" && this._player1._move._move === "Scissors") {
      console.log("Player2 Wins");
      this._player2._wins += 1;
      console.log(this._player2._wins);
      winsTwo.innerHTML += 1;
    } else if (this._player1._move._move === "Scissors" && this._player2._move._move === "Paper") {
      console.log("Player1 Wins");
      this._player1._wins += 1;
      console.log(this._player1._wins);
      winsOne.innerHTML += 1;
    } else if (this._player2._move._move === "Scissors" && this._player1._move._move === "Paper") {
      console.log("Player2 Wins");
      this._player2._wins += 1;
      console.log(this._player2._wins);
      winsTwo.innerHTML += 1;
    } else if (this._player1._move._move === "Paper" && this._player2._move._move === "Rock") {
      console.log("Player1 Wins");
      this._player1._wins += 1;
      console.log(this._player1._wins);
      winsOne.innerHTML += 1;
    } else if (this._player2._move._move === "Paper" && this._player1._move._move === "Rock") {
      console.log("Player2 Wins");
      this._player2._wins += 1;
      console.log(this._player2._wins);
      winsTwo.innerHTML += 1;
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
const player1 = new Player("Player1");
const player2 = new Player("Player2");

const game = new Game(player1, player2, 3);
