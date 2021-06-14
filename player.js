//PLAYER CLASS

class Player {
    constructor (x,y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        const image = new Image();

        image.src = 'https://mpng.subpng.com/20180219/qlw/kisspng-underwater-diving-scuba-diving-snorkeling-clip-art-scuba-diving-art-5a8b05d84fea64.5098774615190604403273.jpg'
        image.onload = () => {
            this.image = image;
            this.draw();
        }

    }

    draw() {
        context.drawImage(this.image, this.x, this.y, 90, 90);
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





