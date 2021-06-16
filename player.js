//PLAYER CLASS
class Player {
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 90;
        this.speedX = 0;
        this.speedY = 0;
    }
        draw() {
        const image = new Image();
        image.src = "./image/scuba_diver.png"
        // image.onload = () => {
        //     this.image = image;
        //     this.draw();
        // }
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    // moveLeft() {
    //     this.x -= 15;
    // }
    // moveRight() {
    //     this.x += 15;
    // }
    // moveUp() {
    //     this.y -= 15;
    // }
    // moveDown() {
    //     this.y += 15;
    // }
}

    
    
    document.addEventListener('keydown', (e) => {
        context.clearRect(0, 0, canvas.clientHeight, canvas.clientWidth);
        switch(e.key) {
            case 'ArrowLeft':
                currentGame.player.speedX -= 0.25
            break;
            case 'ArrowRight':
                currentGame.player.speedX += 0.25
            break; 
            case 'ArrowUp':
                currentGame.player.speedY -= 0.25
            break;
            case 'ArrowDown':
                currentGame.player.speedY += 0.25
            break; 
        }

    });

    document.addEventListener('keyup', () => {           //'keyup' is to tell the machine we also want input when we not press key 
        player.speedX = 0;
        player.speexY = 0;
    });





// //PLAYER CLASS
// class Player {
//     constructor (x,y) {
//         this.x = x;
//         this.y = y;
//         this.width = 120;
//         this.height = 90;
//     }
//         draw() {
//         const image = new Image();
//         image.src = "./image/scuba_diver.png"
//         // image.onload = () => {
//         //     this.image = image;
//         //     this.draw();
//         // }
//         context.drawImage(image, this.x, this.y, this.width, this.height);
//     }
//     moveLeft() {
//         this.x -= 15;
//     }
//     moveRight() {
//         this.x += 15;
//     }
//     moveUp() {
//         this.y -= 15;
//     }
//     moveDown() {
//         this.y += 15;
//     }
// }

    
    
//     document.addEventListener('keydown', (e) => {
//         context.clearRect(0, 0, canvas.clientHeight, canvas.clientWidth);
//         switch(e.key) {
//             case 'ArrowLeft':
//                 currentDiver.moveLeft();
//             break;
//             case 'ArrowRight':
//                 currentDiver.moveRight();
//             break; 
//             case 'ArrowUp':
//                 currentDiver.moveUp();
//             break;
//             case 'ArrowDown':
//                 currentDiver.moveDown();
//             break; 
//         }

// });








