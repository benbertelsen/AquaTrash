
console.log("Javascript file connected to the game");

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//GAME AREA

const gameArea = {
    frames: 0,
    start: function() {
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    },
    // stop: function () {
    //     clearInterval(this.interval);
    // },
    // score: function () {
    //     const points = Math.floor(this.frames / 5);
    //     context.font = '10px Arial';
    //     context.fillStyle = 'black';
    //     context.fillText(`Score: ${points}`, 50, 500)
    // },
};


function updateCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    currentGame.player1.draw(); //we are not able to get to this from inside our startGame() function... (5)
   
    // currentGame.floatingTrashFrequency++;                             //We make our obstacles appear... (10) 
    // if (currentGame.floatingTrashFrequency % 100 === 1) {  //...within a specificed frequency... 
    //   const randomTrashX = Math.floor(Math.random() * (canvas.clientWidth - 1) + 1); //...and giving trash a random starting position
    //   const randomTrashY = 0; 

    // const floatingTrash = new Trash(
    //     30, 
    //     30, 
    //     'red', 
    //     randomTrashX, 
    //     randomTrashY
    // );

    // currentGame.floatingTrash.push(floatingTrash);
    // }
}

requestAnimationFrame(updateCanvas);


//Redraw all game compontents
function updateGameArea() {
    gameArea.clear();
    // player1.newPos();
    player1.update();
    updateTrash();
    // checkGameOver();
}

gameArea.start();
