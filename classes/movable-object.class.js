class MovableObject extends DrawableObject {
    
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
 


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    hit() {
        this.energy -= 2;
        if(this.energy < 0) {
            this.energy = 0;
        }else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }


    isDead() {
        return this.energy == 0;
    }


    isAboveGround() {
        return this.y < 290;
    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
        // return (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) &&
        //     (this.y + this.offsetY + this.height) >= mo.y &&
        //     (this.y + this.offsetY) <= (mo.y + mo.height) &&
        //     mo.onCollisionCourse;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++; 
    }
}