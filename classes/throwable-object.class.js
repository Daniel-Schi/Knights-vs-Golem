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

     /**
    * Initiates the throwing motion of the object.
    */
    throw() {
        this.speedY = 20;
        this.applyGravity();
        throw_sound.play();
        this.throwIntervalFunction();
    }

    /**
     * Adjusts the horizontal position of the thrown object based on character direction.
     */
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

    /**
    * Initiates the animation sequence of the object.
    */
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

    /**
    * Function to load sound and images blood.
    */
    splashBlood() {
        blood_sound.play();
        this.loadImage(this.IMAGE_BLOOD);
        this.stopImage(this.animationThrowingSword);
    }

    /**
    * Interval to clear Image_SWORD and set a Timeout.
    */
    stopImage(IMAGE_SWORD) {
        clearInterval(IMAGE_SWORD);
        setTimeout(() => {
            this.loadImage('');
        }, 100);
    }
}





