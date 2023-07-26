class MovableObject {
    x = 30;
    y = 334;
    img;
    width = 70;
    height = 70;
    imageCache = {};
    currentImage = 0;
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


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Golem) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }
    }

    isColliding(mo) {
        return this.x +this.width > mo.x &&
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