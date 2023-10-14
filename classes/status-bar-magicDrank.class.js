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


    setMagicDrank(magicDrankAmount) {
        this.magicDrankAmount = magicDrankAmount; // Bekommt Wert von Variable bottleAmount, die bei jeder Kollision steigt
        let path = this.IMAGES[this.resolveImageIndex()]; // Zuweisung der URL des gewünschten Bildes (Zahl zwischen 0 und 5) an path
        this.img = this.imageCache[path]; // laden des Pfades aus Array imageCache und zuweisen des Bildes an die Variable "img" in DrawableObjects
    }


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