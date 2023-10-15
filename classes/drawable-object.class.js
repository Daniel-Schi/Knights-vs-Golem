class DrawableObject {

    x = 100;
    y = 150;
    width = 70;
    height = 70;
    img;
    imageCache = {};
    currentImage = 0;

     /**
    * Loads an image from the specified path.
    * @param {string} path - The path of the image to load.
    */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images from an array of paths.
     * @param {string[]} arr - An array of image paths to load.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

     /**
     * Draws the object on the canvas using the provided context.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a frame (rectangle) around certain objects on the canvas using the provided context.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Golem || this instanceof GolemSmall || this instanceof Endboss) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'transparent';
            ctx.stroke();
        }
    }
}