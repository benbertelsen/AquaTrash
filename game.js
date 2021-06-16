//GAME CLASS

class Game {
    constructor() {
        this.player = {};
        this.floatingTrash = [];
        this.score = 0;
        this.animalSaved = 0;
        this.floatingTrashFrequency = 0;
        this.animationID = null; //same things as the frames in the other games we have created
        // this.animationID = null; //NB: we'll see this later. We don't have any animation, before the game starts.
         this.gameOver = false;
    }
    displayCount() {
        let seconds = 59 * 1,
            display = document.querySelector('.timer');
        startTimer(seconds, display);
    }; 
}

