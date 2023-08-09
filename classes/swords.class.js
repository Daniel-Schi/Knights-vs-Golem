class Swords extends MovableObject {
    y = 80 + Math.random() * 120; // setzen der y-Position
    x = 300 + Math.random() * 2000; // Setzen der x-Position zufällig zwischen 300 und 2200
    width = 60;
    height = 60;

    IMAGE = ['img/icons-weapons/PNG/daggers (5).png']

    constructor() {
        super().loadImage('img/icons-weapons/PNG/daggers (5).png');
        this.loadImage(this.IMAGE);

    }
}