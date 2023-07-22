class Clouds extends MovableObject {
    y = 50;
    width = 500;
    height = 100;


    constructor() {
        super().loadImage('img/battleground/PNG/3/clouds.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
       this.moveLeft();
    }
}