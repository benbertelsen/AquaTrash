//PLAYER CLASS

class Player {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.width = 90;
        this.height = 90;
    }

        draw() {
        const image = new Image();
        image.src = 'http://placekitten.com/100/100'
        // image.onload = () => {
        //     this.image = image;
        //     this.draw();
        // }
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }
    

    moveLeft() {
        this.x -= 15;
    }

    moveRight() {
        this.x += 15;
    }

    moveUp() {
        this.y -= 15;
    }

    moveDown() {
        this.y += 15;
    }
}
    
    
    document.addEventListener('keydown', (e) => {
        context.clearRect(0, 0, canvas.clientHeight, canvas.clientWidth);

        switch(e.key) {
            case 'ArrowLeft':
                currentDiver.moveLeft();
            break;

            case 'ArrowRight':
                currentDiver.moveRight();
            break; 

            case 'ArrowUp':
                currentDiver.moveUp();
            break;
    
            case 'ArrowDown':
                currentDiver.moveDown();
            break; 
        }

});




