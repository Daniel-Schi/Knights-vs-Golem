class Sword extends MovableObject {

    width = 50;
    height = 80;

    constructor(imagePath) {
        super();
        this.loadImage(imagePath);
        this.x = 100 + Math.random() * 2000;
        this.y = 200 + Math.random() * 100;
    }
}