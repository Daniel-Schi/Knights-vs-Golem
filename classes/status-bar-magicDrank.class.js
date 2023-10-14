class StatusBarMagicDrank extends DrawableObject {
    
    x = 5;
    y = 70;
    width = 100;
    height = 90;
    IMAGES = [
        'img/status-bar/magic-drank/magic_drank0.png',
        'img/status-bar/magic-drank/magic_drank1.png',
        'img/status-bar/magic-drank/magic_drank2.png',
        'img/status-bar/magic-drank/magic_drank3.png',
        'img/status-bar/magic-drank/magic_drank4.png',
        'img/status-bar/magic-drank/magic_drank5.png',   
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setMagicDrank(0);
    }

    /**
     * Updates the displayed magicDrankAmount image based on the current coin amount.
     * @param {number} magicDrankAmount - The new magicDrankAmount amount.
     */
    setMagicDrank(magicDrankAmount) {
        this.magicDrankAmount = magicDrankAmount; // Gets value from variable bottleAmount, which increases with each collision
        let path = this.IMAGES[this.resolveImageIndex()]; // Assigning the URL of the desired image (number between 0 and 5) to path
        this.img = this.imageCache[path]; // loading the path from array imageCache and assigning the image to the "img" variable in DrawableObjects
    }

    /**
     * Resolve the image index based on the current fill percentage.
     * @returns {number} The index of the image in the IMAGES array.
     */
    resolveImageIndex() {
        if (this.magicDrankAmount >= 5) {
            return 5;
        } else if (this.magicDrankAmount === 4) {
            return 4;
        } else if (this.magicDrankAmount === 3) {
            return 3;
        } else if (this.magicDrankAmount === 2) {
            return 2;
        } else if (this.magicDrankAmount === 1) {
            return 1;
        } else {
            return 0;
        }
    }
}