class Snow extends MovableObject {

    width = 720;
    height = 480;

    constructor(imagePath, x,y) {
        super().loadImage('img/background-Winter/BG_01/Layers/Snow.png');
        this.loadImage(imagePath);
        this.y = -400 ;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveUp();
            this.speed = 0.15;
        }, 1000 / 60);
    }
}
