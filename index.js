
console.log("Javascript file connected to the game");

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let currentGame; 

function startGame() { //this is only called once
  currentGame = new Game();
  currentDiver = new Player(); //Assign a new diver to the new game
  currentGame.player1 = currentDiver;
  currentGame.currentDiver.draw(); //calling a function that lives Player class
  updateCanvas();
}