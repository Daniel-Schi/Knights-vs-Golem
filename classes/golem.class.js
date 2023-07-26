class Golem extends MovableObject {
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


    constructor() {
        super().loadImage('img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 100 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.4;
        this.animate();
    }



    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            this.otherDirection = true;
        }, 200);
    }


}    