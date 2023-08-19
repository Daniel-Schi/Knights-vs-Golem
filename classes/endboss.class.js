class Endboss extends MovableObject {
    width = 350;
    height = 400;
    y = 65;
    offset_x = 180; // verschieben nach rechts
    offset_y = 50; // verschieben nach unten
    offset_width = 360; // verschieben der Box nach links
    offset_height = 50; //verschieben der Box nach oben

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

    IMAGES_HURT = [
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_000.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_001.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_002.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_003.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_004.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_005.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_006.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_007.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_008.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_009.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_010.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Hurt/0_Golem_Hurt_011.png'
    ];

    IMAGES_SPLASHING = [
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_000.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_001.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_002.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_003.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_004.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_005.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_006.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_007.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_008.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_009.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_010.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Slashing/0_Golem_Slashing_011.png'
    ];

    IMAGES_DEAD = [
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_000.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_001.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_002.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_003.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_004.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_005.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_006.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_007.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_008.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_009.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_010.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_011.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_012.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_013.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_014.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SPLASHING);
        this.loadImages(this.IMAGES_DEAD);
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