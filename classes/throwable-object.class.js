class ThrowableObject extends MovableObject {

    IMAGES_SWORD = ['img/icons-weapons/PNG/daggers (5).png'];
    IMAGES_BLOOD = ['img/blood-icon/blood.png'];
    animationThrowingSword;


    constructor(x, y, otherDirection) {
        super().loadImage('img/icons-weapons/PNG/daggers (5).png');
        this.loadImages(this.IMAGES_BLOOD);
        this.loadImages(this.IMAGES_SWORD);
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
        const characterOtherDirection = world.character.otherDirection;     
        setInterval(() => {
            if (!characterOtherDirection) {
                this.x += 9;
            } 
            if (characterOtherDirection) {
                this.x -= 9;
            }
        }, 25);
    }

    /**
    * Initiates the animation sequence of the object.
    */
    animate() {
        this.animationThrowingSword = setInterval(() => {
            if (world.isAttackable) {
                this.splashBlood();
            } else {
                this.playAnimation(this.IMAGES_SWORD);  
            }               
        }, 100);
    }

    /**
    * Function to load sound and images blood.
    */
    splashBlood() {
        blood_sound.play();
        this.playAnimation(this.IMAGES_BLOOD);
        this.stopAnimation(this.animationThrowingSword); 
    }

    /**
    * Interval to clear Image_SWORD.
    */
    stopAnimation(animationThrowingSword) {
        clearInterval(animationThrowingSword);
        setTimeout(() => {          
            blood_sound.pause();
        }, 300);
    }
}





