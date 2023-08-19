class Golem extends MovableObject {
    width = 120;
    height = 100;
    y= 325;
    energy = 100;
    offset_x = 10; // verschieben nach rechts
    offset_y = 0; // verschieben nach unten
    offset_width = 80; // verschieben der Box nach links
    offset_height = 0; //verschieben der Box nach oben

    IMAGES_WALKING = [
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_000.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_001.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_002.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_003.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_004.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_005.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_006.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_007.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_008.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_009.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_010.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_011.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_012.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_013.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_014.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_015.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_016.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_017.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_018.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_019.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_020.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_021.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_022.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_023.png',
    ];

    IMAGES_DEAD = [
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_000.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_001.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_002.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_003.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_004.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_005.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_006.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_007.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_008.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_009.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_010.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_011.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_012.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_013.png',
        'img/golems-sprites/Golem_2/PNG/PNG Sequences/Dying/0_Golem_Dying_014.png'
    ];

 
    constructor() {
        super().loadImage('img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 200 + Math.random() * 3000;
        this.speed = 0.15 + Math.random() * 0.2;
        this.animate();
    }



    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            // this.playAnimation(this.IMAGES_DEAD);
            this.otherDirection = true;
        }, 200);
    }


}    