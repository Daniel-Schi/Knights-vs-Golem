class Clouds extends MovableObject {

    y = 20;
    width = 400;
    height = 80;

    constructor() {
        super().loadImage('img/battleground/PNG/Clouds_white/Shape8/clouds_shape8_4.png');

        this.x = -400 + Math.random() * 2500;
        this.animate();
    }

    /**
     * Animate the cloud's movement.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
            this.speed = 0.15;
        }, 1000 / 60);
    } 
}