class StatusBarCharacter extends DrawableObject {

    IMAGES = [
        'img/status-bar/status-knight/progress-bar-0.png',
        'img/status-bar/status-knight/progress-bar-1.png',
        'img/status-bar/status-knight/progress-bar-2.png',
        'img/status-bar/status-knight/progress-bar-3.png',
        'img/status-bar/status-knight/progress-bar-4.png',
        'img/status-bar/status-knight/progress-bar-5.png',
    ];

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 5;
        this.y = -10;
        this.width = 100;
        this.height = 90;
        this.setPercentage(100);
    }

    /**
     * Updates the displayed percentage image based on the current coin amount.
     * @param {number} percentage - The new percentage amount.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

     /**
     * Set the character health percentage and update the displayed image accordingly.
     * @param {number} percentage - The health percentage of the character.
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}