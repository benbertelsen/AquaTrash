
console.log("Javascript file connected to the game");

const diveCanvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.getElementById('game-board').style.display = 'none';
document.getElementById('start-button').onclick = () => {
  document.getElementById('game-board').style.display = 'block';
  startGame();
};

let currentGame; 
let currentDiver;

function startGame() { //this is only called once
  currentGame = new Game();
  currentDiver = new Player(350,700); //Assign a new diver to the new game
  currentGame.player = currentDiver;
  currentGame.player.draw(); //calling a function that lives Player class
  updateCanvas();
}

function updateCanvas() {
  context.clearRect(0, 0, diveCanvas.clientWidth, diveCanvas.clientHeight);
  currentGame.player.draw();
  currentGame.floatingTrashFrequency++;

if (currentGame.floatingTrashFrequency % 100 === 1) { //..IF this happens, THEN instantiate new trash obstacles and push to array
    const randomTrashPosX = Math.floor(Math.random() * 450); //hack solution here to troubleshoot
    const randomTrashPosY = 0;
    const randomWidth = 30;
    const randomHeight = 30;

    const fallingTrash = new Trash( //instantiating our obstacles from our class in the obstalces.js file (11)
    randomTrashPosX,
    randomTrashPosY, 
    randomWidth,
    randomHeight
    );
    
    currentGame.floatingTrash.push(fallingTrash);
    }

    currentGame.floatingTrash.forEach((trash, i) => { //making sure the obstacles fall down the y-axis all the time
        trash.y += 1;
        trash.draw();
    });
    requestAnimationFrame(updateCanvas);
}


// currentGame.animationID = requestAnimationFrame(updateCanvas);
// requestAnimationFrame(updateCanvas);
