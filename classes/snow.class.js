class Snow extends MovableObject {

    width = 720;
    height = 480;


    constructor(imagePath, x,y) {
        super().loadImage('img/background-Winter/BG_01/Layers/Snow.png');
        this.loadImage(imagePath);
        this.y = y;
        this.x = x;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveDown();
            this.speed = 0.5;
        }, 1000 / 60);
    }
}
