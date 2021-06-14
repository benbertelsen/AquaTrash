class Player {
    constructor (x,y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        const image = new Image();

        image.src = 'https://lh3.googleusercontent.com/proxy/ZH_lSZJMAzF5kXF55lghRGWkd_irlMk_7WB45f5d1oztaxa8q-Fys7Wczh4JaaK7jWLdg0c78Ihftai_FgCsgz751k1fch828aqV99p6NOZ9'
        image.onload = () => {
            this.image = image;
            this.draw();
        }

    }

    draw() {
        context.drawImage(this.image, this.x, this.y, 90,90);
    }

    moveLeft() {
        this.x -= 25;
    }

    moveRight() {
        this.x +=25;
    }

    
    const player1 = new Player(350,700);
    
    document.addEventListener('keydown', (e) => {


        switch(e.key) {
            case 'ArrowLeft':
            player1.moveLeft();
            break;

            case 'ArrowRight':
            player1.moveRight();
            break; 
}
        context.clearRect(this.x, this.y, this.height, this.width);
    }
}





