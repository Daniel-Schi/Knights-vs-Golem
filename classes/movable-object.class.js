class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    isHurt = false;
    animationCounter = 0;
   

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
    

    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable Object should always fall
            return this.y < 1350;
        } else {
            return this.y < 290;
        }
    }

  
    hit(damage) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Time since 1.1.1970
        }
    }


    isDead() {
        return this.energy <= 0;
    }


    isColliding(obj, reduceLeftDistance, reduceRightDistance, reduceUpperDistance, reduceLowerDistance) {
        return (
            this.x + this.width - this.offset_x >= obj.x + reduceLeftDistance &&
            this.x + this.offset_width <= obj.x + obj.width - reduceRightDistance &&
            this.y + this.height - this.offset_height >= obj.y + reduceUpperDistance &&
            this.y + this.offset_y <= obj.y + obj.height - reduceLowerDistance
        );
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }


    moveDown() {
        this.y += this.speed;
        this.otherDirection = true;
    }


    jump() {
        this.speedY = 30;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    playCharacterAnimation(images) {
        if (!this.currentImage) {   // Wenn es das erste Mal ist, dass die Animation gestartet wird,                       
            this.currentImage = 0;  // setzen Sie currentImage auf 0.
        }
        if (this.currentImage < images.length) {
            let i = this.currentImage;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {  // Wenn alle Bilder durchlaufen wurden, behalten Sie das letzte Bild bei.
            let lastIndex = images.length - 1;
            let lastImagePath = images[lastIndex];
            this.img = this.imageCache[lastImagePath];
        }
    }


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