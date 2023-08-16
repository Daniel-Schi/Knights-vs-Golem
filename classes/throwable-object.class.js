class ThrowableObject extends MovableObject {
    throwInterval;

    throw_sound = new Audio('audio/throw.wav');


    constructor(x, y, otherDirection) {
        super().loadImage('img/icons-weapons/PNG/daggers (5).png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
        this.otherDirection = otherDirection;
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        this.animate();
    }

    animate(otherDirection) {
        if (!this.isThrowing) {
            this.isThrowing = true;
            this.throw_sound.play();
            this.throwInterval = this.throwIntervalFunction(otherDirection);
            this.setTimeout = this.setTimeoutFunction();
        }
    }

    throwIntervalFunction(otherDirection) {
        setInterval(() => {
            otherDirection = world.character.otherDirection;
            if (!otherDirection) {
                this.x += 10;
            } 
            if (otherDirection) {
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





