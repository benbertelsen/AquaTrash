//TRASH CLASS

// const floatingTrash = [];

class Trash {
    constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;

    }

    draw() {
        // selectImg = function() {
        const theImage = new Image();
        theImage.src = this.image;
        context.drawImage(theImage, this.x, this.y, this.width, this.height)
        // }
    }
 
}
