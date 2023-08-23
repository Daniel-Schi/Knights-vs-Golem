class ThrowableObject extends MovableObject {

    IMAGE_SWORD = ['img/icons-weapons/PNG/daggers (5).png'];
    IMAGE_BLOOD = ['img/blood-icon/blood.png'];
    throw_sound = new Audio('audio/throw.wav');
    isThrowing = false;
    checkCollisionToEnemies;

    constructor(x, y, otherDirection) {
        super();
        this.loadImage(this.IMAGE_BLOOD);
        this.loadImage(this.IMAGE_SWORD);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
        this.animate();
        this.otherDirection = otherDirection;
    }

    throw() {
        this.isThrowing = true;
        this.speedY = 20;
        this.applyGravity();
        this.throw_sound.play();
        this.throwIntervalFunction();
    }

    throwIntervalFunction() {
        setInterval(() => {
            const characterOtherDirection = world.character.otherDirection;
            if (!characterOtherDirection) {
                this.x += 10;
            }
            if (characterOtherDirection) { 
                this.x -= 10;
            }
        }, 25);
    }


    animate() {
        setInterval(() => {
            if (!this.isThrowing) {
                if (this.y < 350) {
                    this.loadImage(this.IMAGE_SWORD);
                } else if (this.y > 350) {
                    this.loadImage(this.IMAGE_BLOOD);
                    // this.setTimeout = this.setTimeoutFunction();
                }
            }
        }, 200)
    }


    // setTimeoutFunction() {
    //     setTimeout(() => {
    //         clearInterval(this.throwInterval);
    //         this.isThrowing = false;
    //     }, 1000);
    // }
}





