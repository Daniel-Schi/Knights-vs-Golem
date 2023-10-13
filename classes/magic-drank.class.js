class MagicDrank extends MovableObject {
    y = 120 + Math.random() * 120; // setzen der y-Position
    x = 300 + Math.random() * 2000; // Setzen der x-Position zufällig zwischen 300 und 2200
    width = 30;
    height = 30;
    offset_x = 0;
    offset_y = 0;
    offset_width = 0;
    offset_height = 0;

    IMAGE = ['img/bottle-icons/PNG/without background/7.png',]

    
    constructor() {
        super().loadImage('img/bottle-icons/PNG/without background/7.png');
        this.loadImage(this.IMAGE);
    }
} 