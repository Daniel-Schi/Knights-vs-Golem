class ThrowableObject extends MovableObject {

    IMAGE_SWORD = ['img/icons-weapons/PNG/daggers (5).png'];
    IMAGE_BLOOD = ['img/blood-icon/blood.png'];
    animationThrowingSword;

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
        this.speedY = 20;
        this.applyGravity();
        throw_sound.play();
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
        this.animationThrowingSword = setInterval(() => {
            if (world.endbossWasHit) {
                this.splashBlood();
            } else if (this.y < 300) {
                this.loadImage(this.IMAGE_SWORD);   
            } else {
                this.splashBlood();
            }
        }, 100)
    }

    splashBlood() {
        blood_sound.play();
        this.loadImage(this.IMAGE_BLOOD);
        this.stopImage(this.animationThrowingSword);
    }

    stopImage(IMAGE_SWORD) {
        clearInterval(IMAGE_SWORD);
        setTimeout(() => {
            this.loadImage('');
        }, 100);
    }
  
}





