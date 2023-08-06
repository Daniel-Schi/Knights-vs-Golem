class ThrowableObject extends MovableObject {

throw_sound = new Audio('audio/throw.wav');

    constructor(x, y) {
        super().loadImage('img/icons-weapons/PNG/daggers (5).png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 12;
        this.applyGravity();
        setInterval(() => {
            
            
            this.x += 5;
            this.throw_sound.play();
            
        }, 25);
    }

}