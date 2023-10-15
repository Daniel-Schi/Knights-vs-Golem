class StatusBarSword extends DrawableObject {

    x = 5;
    y = 30;
    width = 100;
    height = 90;
    IMAGES = [
        'img/status-bar/status-sword/sword-progress-bar-0.png',
        'img/status-bar/status-sword/sword-progress-bar-1.png',
        'img/status-bar/status-sword/sword-progress-bar-2.png',
        'img/status-bar/status-sword/sword-progress-bar-3.png',
        'img/status-bar/status-sword/sword-progress-bar-4.png',
        'img/status-bar/status-sword/sword-progress-bar-5.png'
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setSwords(0);
    }

    /**
    * Updates the displayed swordAmount image based on the current coin amount.
    * @param {number} swordAmount - The new swordAmount amount.
    */
    setSwords(swordAmount) {
        this.swordAmount = swordAmount; // Gets value from variable bottleAmount, which increases with each collision
        let path = this.IMAGES[this.resolveImageIndex()]; // Assigning the URL of the desired image (number between 0 and 5) to path
        this.img = this.imageCache[path]; // loading the path from array imageCache and assigning the image to the "img" variable in DrawableObjects
    }

    /**
    * Resolves the index of the sword image based on the current sword amount.
    * @returns {number} The index of the sword image to be displayed.
    */
    resolveImageIndex() {
        if (this.swordAmount > 8) {
            return 5;
        } else if (this.swordAmount > 6) {
            return 4;
        } else if (this.swordAmount > 4) {
            return 3;
        } else if (this.swordAmount > 2) {
            return 2;
        } else if (this.swordAmount > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}