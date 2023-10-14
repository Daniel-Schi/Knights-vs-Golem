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

    setSwords(swordAmount) {
        this.swordAmount = swordAmount; // Bekommt Wert von Variable bottleAmount, die bei jeder Kollision steigt
        let path = this.IMAGES[this.resolveImageIndex()]; // Zuweisung der URL des gewünschten Bildes (Zahl zwischen 0 und 5) an path
        this.img = this.imageCache[path]; // laden des Pfades aus Array imageCache und zuweisen des Bildes an die Variable "img" in DrawableObjects
    }

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