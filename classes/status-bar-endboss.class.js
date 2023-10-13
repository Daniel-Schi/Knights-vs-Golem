class StatusBarEndboss extends DrawableObject {
    x = 605;
    y = -15;
    width = 100;
    height = 100;

    IMAGES = [
        'img/status-bar/status-golem/Golem0.png',
        'img/status-bar/status-golem/Golem1.png',
        'img/status-bar/status-golem/Golem2.png',
        'img/status-bar/status-golem/Golem3.png',
        'img/status-bar/status-golem/Golem4.png',
        'img/status-bar/status-golem/Golem5.png'
    ];

    percentage = 100;

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