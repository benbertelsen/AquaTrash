//TRASH CLASS

// const floatingTrash = [];

class Trash {
    constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    }

    update() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    left() {
        return this.x;
    };

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }

    // crashWith(component) {
    //     return !(this.bottom() < component.top() ||
    //     this.top() > component.bottom() ||
    //     this.right() < component.left() ||
    //     this.left() > component.right())
    // }

}    
    function updateTrash() { ////making sure the obstacles fall down the y-axis all the time
    floatingTrash.forEach((floatingTrash) => {
        floatingTrash.x -= 1;
        floatingTrash.update();
    });

    gameArea.frames += 1;

    console.log(floatingTrash);   
}
