//PLAYER CLASS

class Player {
    constructor (x,y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

        draw() {
        const image = new Image();

        image.src = 'http://placekitten.com/100/100'
        image.onload = () => {
            this.image = image;
            this.draw();
        }
        context.drawImage(image, this.x, this.y, 90, 90);
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
    
    const player1 = new Player(350, 700);
    
    document.addEventListener('keydown', (e) => {
        context.clearRect(0, 0, canvas.clientHeight, canvas.clientWidth);

        switch(e.key) {
            case 'ArrowLeft':
            player1.moveLeft();
            break;

            case 'ArrowRight':
            player1.moveRight();
            break; 

            case 'ArrowUp':
            player1.moveUp();
            break;
    
            case 'ArrowDown':
            player1.moveDown();
            break; 
}
        
        player1.draw();

});




