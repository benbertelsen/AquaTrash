console.log("Javascript file connected to the game");

const diveCanvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.getElementById('game-board').style.display = 'none';
document.getElementById('start-button').onclick = () => {
  document.getElementById('game-board').style.display = 'block';
  startGame();
};

let currentGame; 

function startGame() { //this is only called once
  let currentGame = new Game();
  let currentDiver = new Player(); //Assign a new diver to the new game
  currentGame.player1 = currentDiver;
  currentGame.player1.draw(); //calling a function that lives Player class
  updateCanvas();
}

function updateCanvas() {
context.clearRect(0, 0, diveCanvas.clientWidth, diveCanvas.clientHeight);
currentGame.player1.draw();
currentGame.floatingTrashFrequency++;

if (currentGame.floatingTrashFrequency % 100 === 1) { //..IF this happens, THEN instantiate new trash obstacles and push to array
    const randomTrashPosX = getRandomInt(100); //hack solution here to troubleshoot
    const randomTrashPosY = 50;
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

    currentGame.floatingTrash.forEach((floatingTrash, i) => { //making sure the obstacles fall down the y-axis all the time
        floatingTrash.y += 1;
        floatingTrash.draw();
    });
    requestAnimationFrame(updateCanvas);
}


// currentGame.animationID = requestAnimationFrame(updateCanvas);
// requestAnimationFrame(updateCanvas);
