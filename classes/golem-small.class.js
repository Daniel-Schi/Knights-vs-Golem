class GolemSmall extends MovableObject {

    IMAGES_WALKING = [
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_000.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_001.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_002.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_003.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_004.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_005.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_006.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_007.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_008.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_009.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_010.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_011.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_012.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_013.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_014.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_015.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_016.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_017.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_018.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_019.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_020.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_021.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_022.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Walking/0_Golem_Walking_023.png'
    ];
    IMAGES_DEAD = [
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_000.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_001.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_002.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_003.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_004.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_005.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_006.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_007.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_008.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_009.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_010.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_011.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_012.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_013.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_014.png'
    ];
    IMAGES_HURT = [
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_000.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_001.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_002.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_003.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_004.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_005.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_006.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_007.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_008.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_009.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_010.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Hurt/0_Golem_Hurt_011.png'
    ];
    IMAGES_IDLE = [
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_000.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_001.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_002.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_003.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_004.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_005.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_006.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_007.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_008.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_009.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_010.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_011.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_012.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_013.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_014.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_015.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_016.png',
        'img/golems-sprites/Golem_1/PNG/PNG Sequences/Idle/0_Golem_Idle_017.png'
    ];

    width = 60;
    height = 60;
    y = 360;
    enemyIsDead = false;
    offset_x = 0; // verschieben nach rechts
    offset_y = 30; // verschieben nach unten
    offset_width = 0; // verschieben der Box nach links
    offset_height = 60; //verschieben der Box nach oben
    enemieDirection = 0;
    toClose = false;
    currentImage = 0;


    constructor() {
        super().loadImage('img/golems-sprites/Golem_2/PNG/PNG Sequences/Walking/0_Golem_Walking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 250 + Math.random() * 3000;
        this.animate();
        this.direction;
    }
    

    direction() {
        setInterval(() => {
            if (this.toClose == false) {
                this.enemieDirection = Math.random();
            }
            this.speed = 0.2 + Math.random() * 0.9;
        }, 2000);
    }

    animate() {
        setInterval(() => {
            this.animateEnemies();
        }, 100);

        setInterval(() => {
            this.moveEnemies();
        }, 1000 / 60);


    }

    animateEnemies() {
        if (this.enemyIsDead) {
            this.loadImage('img/golems-sprites/Golem_1/PNG/PNG Sequences/Dying/0_Golem_Dying_014.png');
        } else if (this.isHurt) {
            this.playEnemyAnimation(this.IMAGES_HURT);
        } else if (this.enemieDirection <= 0.2 || this.enemieDirection >= 0.2) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    moveEnemies() {
        if (!this.enemyIsDead) {
            if (this.enemieDirection <= 0.2) {
                this.moveRight();
            } else if (this.enemieDirection >= 0.3) {
                this.moveLeft();
            } else {
            }
        }
    }
}