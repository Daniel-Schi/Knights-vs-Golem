class Endboss extends MovableObject {

    IMAGES_IDLE = [
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_000.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_001.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_002.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_003.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_004.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_005.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_006.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_007.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_008.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_009.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_010.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_011.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_012.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_013.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_014.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_015.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_016.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Idle/0_Golem_Idle_017.png'
    ];

    IMAGES_WALKING = [
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_000.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_001.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_002.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_003.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_004.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_005.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_006.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_007.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_008.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_009.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_010.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_011.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_012.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_013.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_014.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_015.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_016.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_017.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_018.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_019.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_020.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_021.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_022.png',
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Walking/0_Golem_Walking_023.png'

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
        'img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_014.png'
    ];

    width = 300;
    height = 350;
    y = 120;
    offset_x = 70;
    offset_y = 0;
    offset_width = 140;
    offset_height = 0;
    energy = 100;
    world;
    enemieDirection = 0;
    toClose = false;
    isSplashing = false;
    endzone = false;


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SPLASHING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 3300;
        this.animate();
        this.direction;
    }

    /**
    * Initializes the interval to determine the direction and speed of the opponents.
    */
    direction() {
        setInterval(() => {
            if (this.toClose == false) {
                this.enemieDirection = Math.random();
            }
            this.speed = 0.1 + Math.random() * 0.9;
        }, 2000);
    }

    /**
    * Initializes the animation intervals for endboss movements and animations.
    */
    animate() {
        setInterval(() => {
            this.animateEnemies();
        }, 1000 / 10);

        setInterval(() => {
            this.moveEnemies();
        }, 1000 / 60);
    }

    /**
     * Initializes the animation of the endboss.
     */
    animateEnemies() {
        if (this.isDead()) {
           world.checkWinGame();
           this.playAnimation(this.IMAGES_DEAD);           
        } else if (this.isHurt) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isSplashing) {
            this.playAnimation(this.IMAGES_SPLASHING);
            this.speed = 2;
        } else if (this.enemieDirection <= 0.2 || this.enemieDirection >= 0.5) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    /**
     * Make the move animation for the endboss.
     */
    moveEnemies() {
        if (!this.isDead() && this.endzone) {
            if (this.enemieDirection <= 0.2) {
                this.moveRight();
            } else if (this.enemieDirection >= 0.5) {
                this.moveLeft();
            } else {
            }
        }
    }
}