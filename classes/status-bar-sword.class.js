class StatusBarSword extends DrawableObject {
    x = 5;
    y = 30;
    width = 100;
    height = 90;
    IMAGES = [
        'img/status-bar/status-sword/sword-progress-bar-5.png',
        'img/status-bar/status-sword/sword-progress-bar-4.png',
        'img/status-bar/status-sword/sword-progress-bar-3.png',
        'img/status-bar/status-sword/sword-progress-bar-2.png',
        'img/status-bar/status-sword/sword-progress-bar-1.png',
        'img/status-bar/status-sword/sword-progress-bar-0.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

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