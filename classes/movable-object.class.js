class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };



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
        if (this.energy < 0) {
            this.energy = 0;
        } else {
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


    isReallyDead() {
        return this.energy === 0;
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable Object should always fall
            return true;
        } else {
            return this.y < 290;
        }
    }


    playSingleAnimation(images) {
        let animationImages = images.map((path) => {
            const img = new Image();
            img.src = path;
            return img;
        });
        let frame = 0;
        const animateFrame = () => {
            this.img = animationImages[frame];
            frame = (frame + 1) % animationImages.length;
        };
        const animationInterval = setInterval(animateFrame, 100);
        setTimeout(() => {
            clearInterval(animationInterval);
            // Nur das letzte Bild der Animation beibehalten
            this.img = this.imageCache[images[images.length - 1]];
        }, 1000);
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

    moveUp() {
        this.y += this.speed;
        this.otherDirection = true;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}