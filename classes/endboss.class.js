class Endboss extends MovableObject {
    width = 300;
    height = 400;
    y = 65;

    IMAGES_WALKING = [
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_000.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_001.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_002.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_003.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_004.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_005.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_006.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_007.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_008.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_009.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_010.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Run Throwing/0_Golem_Run Throwing_011.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 3500;
    
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