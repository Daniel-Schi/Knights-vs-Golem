class StatusBar extends DrawableObject {

    IMAGES = [
        'img/status-bar/4. Marcadores/orange/0_  copia.png',
        'img/status-bar/4. Marcadores/orange/20_ copia 2.png',
        'img/status-bar/4. Marcadores/orange/40_  copia.png',
        'img/status-bar/4. Marcadores/orange/60_  copia.png',
        'img/status-bar/4. Marcadores/orange/80_  copia.png',
        'img/status-bar/4. Marcadores/orange/100_  copia.png',
    ];


    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 5;
        this.y = 5;
        this.width = 90;
        this.height = 30;
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