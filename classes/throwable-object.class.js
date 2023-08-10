class ThrowableObject extends MovableObject {

    throw_sound = new Audio('audio/throw.wav');
    throwInterval;

    constructor(x, y,) {
        super().loadImage('img/icons-weapons/PNG/daggers (5).png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        this.animate(); 
    }

    animate() {
        if (!this.isThrowing) {
            this.isThrowing = true;
            this.throw_sound.play();
            this.throwInterval = this.throwIntervalFunction();
            this.setTimeout = this.setTimeoutFunction();
        }
    }

    throwIntervalFunction() {
        setInterval(() => {
            const otherDirection = world.character.otherDirection;
            if (this.y < 1025 && !otherDirection) {
                this.x += 10;
            }
            if (this.y < 1025 && otherDirection) { 
                this.x -= 10;
            }
        }, 25);
    }

    setTimeoutFunction() {
        setTimeout(() => {
            clearInterval(this.throwInterval);
            this.isThrowing = false;
        }, 1000);
    }

}





