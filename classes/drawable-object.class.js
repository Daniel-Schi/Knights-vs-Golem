class DrawableObject {
    x = 30;
    y = 334;
    img;
    width = 70;
    height = 70;
    imageCache = {};
    currentImage = 0;


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
        if (this instanceof Character || this instanceof Golem || this instanceof GolemSmall) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }
    }
}