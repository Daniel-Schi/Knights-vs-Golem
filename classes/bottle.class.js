class Bottle extends MovableObject {

    width = 20;
    height = 20;

    constructor(imagePath) {
        super();
        this.loadImage(imagePath);
        this.x = 100 + Math.random() * 2000;
        this.y = 200 + Math.random() * 100;
    }
}