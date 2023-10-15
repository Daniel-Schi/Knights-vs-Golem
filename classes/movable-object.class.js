class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    isHurt = false;
    animationCounter = 0;
   
    /**
     * Applies gravity to the object's vertical movement.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (!this.isAboveGround()) {
                this.y = 305;
            }
        }, 1000 / 25);
    }
    
    /**
     * Checks if the object is above the ground.
     * @returns {boolean} - True if above ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable Object should always fall
            return this.y < 1350;
        } else {
            return this.y < 290;
        }
    }

    /**
     * Reduces the energy of the hit object after a hit.
     */
    hit(damage) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Time since 1.1.1970
        }
    }

    /**
     * Checks if the object is dead.
     * @return {boolean} - True if dead, false otherwise.
     */
    isDead() {
        return this.energy === 0;
    }

    /**
     * Checks if the object is colliding with another object.
     * @return {boolean} - True if colliding, false otherwise.
     */
    isColliding(obj, reduceLeftDistance, reduceRightDistance, reduceUpperDistance, reduceLowerDistance) {
        return (
            this.x + this.width - this.offset_x >= obj.x + reduceLeftDistance &&
            this.x + this.offset_width <= obj.x + obj.width - reduceRightDistance &&
            this.y + this.height - this.offset_height >= obj.y + reduceUpperDistance &&
            this.y + this.offset_y <= obj.y + obj.height - reduceLowerDistance
        );
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    /**
     * Moves the object to the down.
     */
    moveDown() {
        this.y += this.speed;
        this.otherDirection = true;
    }

    /**
     * Makes the object jump.
     */
    jump() {
        this.speedY = 30;
    }

    /**
    * Plays animation for the object using provided images.
    * @param {string[]} images - Array of image paths for the animation.
    */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
    * Initializes the animation of the character.
    */
    playCharacterAnimation(images) {
        if (!this.currentImage) {   // If it is the first time the animation is started,                       
            this.currentImage = 0;  // set currentImage to 0.
        }
        if (this.currentImage < images.length) {
            let i = this.currentImage;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {  // When all images have been cycled, keep the last image.
            let lastIndex = images.length - 1;
            let lastImagePath = images[lastIndex];
            this.img = this.imageCache[lastImagePath];
        }
    }

    /**
    * Initializes the animation of the enemies.
    */
    playEnemyAnimation(images) {
        if (this.animationCounter < images.length) {
            let i = this.animationCounter;
            let path = images[i];
            this.img = this.imageCache[path];
            this.animationCounter++;
        } else {
            this.animationCounter = 0;
            if (this instanceof Character) {
                this.world.character.triggert = false;
            }
        }
    }
}