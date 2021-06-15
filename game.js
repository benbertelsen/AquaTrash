//GAME CLASS

class Game {
    constructor() {
        this.player = {};
        this.floatingTrash = [];
        this.score = 0;
        this.floatingTrashFrequency = 0;
        this.animationID = null; //same things as the frames in the other games we have created
        this.gameOver = false;
    }

    displayCount() {
        let seconds = 10 * 1,
        display = document.querySelector('.timer');
        startTimer(seconds, display);
      };
}