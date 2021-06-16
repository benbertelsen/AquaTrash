console.log("Javascript file connected to the game");

const diveCanvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.querySelector(".gameOverMessage").style.display = "none";
document.querySelector(".animalsSaved").style.display = "none";
document.getElementById('game-board').style.display = 'none';
document.getElementById('start-button').onclick = () => {
document.getElementById('game-board').style.display = 'block';
  startGame();

};
let currentGame; 
let currentDiver;


function startGame() { //this is only called once
  currentGame = new Game();
  currentDiver = new Player(250,600); //Assign a new diver to the new game
  currentGame.player = currentDiver;
  currentGame.player.draw(); //calling a function that lives Player class
  currentGame.displayCount();
  updateCanvas();
}
function detectCollision(trash) {
  return !(
    currentGame.player.x > trash.x + trash.width ||
    currentGame.player.x + currentGame.player.width < trash.x ||
    currentGame.player.y > trash.y + trash.height
  );
}
function updateCanvas() {
  context.clearRect(0, 0, diveCanvas.clientWidth, diveCanvas.clientHeight);
  currentGame.player.draw();
  currentGame.floatingTrashFrequency++;

  const imgArray = [
    "./image/computerkitten.png", 
    "./image/pizza.png", 
    "./image/plastic_bag.png", 
    "./image/scissor.png", 
    "./image/bottle.png", 
    "./image/alien.png", 
    "./image/landmover.png", 
    "./image/pirate.png", 
    "./image/tree.png", 
    "./image/plastic.png", 
    "./image/cycle.png"];

  if (currentGame.floatingTrashFrequency % 100 === 1) { //..IF this happens, THEN instantiate new trash obstacles and push to array
    const randomTrashPosX = Math.floor(Math.random() * 450); //hack solution here to troubleshoot
    const randomTrashPosY = 0;
    const randomWidth = 60;
    const randomHeight = 60;
    const randomImage = imgArray[Math.floor(Math.random() * imgArray.length)]
    
    const fallingTrash = new Trash( //instantiating our obstacles from our class in the obstalces.js file (11)
    randomTrashPosX,
    randomTrashPosY, 
    randomWidth,
    randomHeight,
    randomImage
    );

    currentGame.floatingTrash.push(fallingTrash);
    }
    
    currentGame.floatingTrash.forEach((trash, i) => { //making sure the obstacles fall down the y-axis all the time
        trash.y += 1;
        trash.draw();

        if (detectCollision(trash)) {
          currentGame.score  += 1;
          currentGame.floatingTrash.splice(i, 1);
          document.querySelector(".score span").innerHTML = currentGame.score;

          if (currentGame.score % 4 === 0){
            currentGame.animalSaved ++;
            document.querySelector(".animalsSaved").style.display = "block";
            document.querySelector(".my-animals span").innerHTML = currentGame.animalSaved;
            
          }

        }

    });
    requestAnimationFrame(updateCanvas);

}

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  let countdown = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
        document.getElementById("game-board").style.display = "none";
        document.querySelector(".gameOverMessage").style.display = "block";
        

        currentGame.gameOver = true;
        clearInterval(countdown);
      }


  }, 1000);
}

if (!currentGame.gameOver){
  currentGame.animationId = requestAnimationFrame(updateCanvas);
} 
//currentGame.animationID = requestAnimationFrame(updateCanvas);
//requestAnimationFrame(updateCanvas);







