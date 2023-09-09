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

   

    width = 300;
    height = 350;
    y = 120;
    offset_x = 50; // verschieben nach rechts
    offset_y = 0; // verschieben nach unten
    offset_width = 100; // verschieben der Box nach links
    offset_height = 0; //verschieben der Box nach oben
    energy = 100;
    world;
    enemieDirection = 0;
    toClose = false;
    isSplashing = false;

    dead_Sound = new Audio('audio/monster-dead.wav');


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SPLASHING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 500;
        this.animate();
        this.direction;
        this.otherDirection = false;
    }

    direction() {
        setInterval(() => {
            if (this.toClose == false) {
                this.enemieDirection = Math.random();
            }
            this.speed = 0.4 + Math.random() * 0.9;
        }, 2000);
    }

    animate() {
        setInterval(() => {
            this.animateEnemies();
        }, 160);

        setInterval(() => {
            this.moveEnemies();
        }, 1000 / 60);
    }

    animateEnemies() {
        if (this.isDead()) {
            this.loadImage('img/golems-sprites/Golem_3/PNG/PNG Sequences/Dying/0_Golem_Dying_014.png');
        } else if (this.isHurt(0.3)) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isSplashing) {
            this.playAnimation(this.IMAGES_SPLASHING);
        } else if (this.enemieDirection <= 0.2 || this.enemieDirection >= 0.6) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    moveEnemies() {
        if (!this.isDead()) {
            if (this.enemieDirection <= 0.2) {
                this.moveRight();
            } else if (this.enemieDirection >= 0.6) {
                this.moveLeft();
            } else {
            }
        }
    }

    // isSplashing() {
    //     this.isSplashing = true;
    //     if(this.x < world.character.x + 200 && !this.isDead()) {
    //         setTimeout(() => {
    //             this.playAnimation(this.IMAGES_SPLASHING);
    //         }, 1000);
    //     }
    // }

    // animate() {
    //     setInterval(() => {
    //         if (this.isDead) {
    //             this.playAnimation(this.IMAGES_DEAD);
    //         } else if (this.hurtEndboss) {
    //             this.playAnimation(this.IMAGES_HURT);
    //         } else if (this.isSplashing) {
    //             this.playAnimation(this.IMAGES_SPLASHING);
    //              this.isSplashing();
    //         } else {
    //             this.moveLeftEndboss();
    //             this.playAnimation(this.IMAGES_WALKING);

    //         }
    //     }, 100);
    // }
    // // || this.moveRightEndboss()
    // endbossHit() {
    //     this.energy -= 20;
    //     if (this.energy < 0) {
    //         this.energy = 0;
    //     } else {
    //         this.lastHit = new Date().getTime();
    //     }
    // }

    // hurtEndboss() {
    //     this.hurtEndboss = true;
    //     let timepassed = new Date().getTime() - this.lastHit;
    //     timepassed = timepassed / 1000;
    //     return timepassed < 0.3;
    // }

 

  

    // // moveRightEndboss() {
    // //     this.x < world.character.x + 100;
    // //     this.otherDirection = false;
    // //     this.isWalking = true;
    // //     this.x += this.speed;
    // // }

    // moveLeftEndboss() {
    //     this.otherDirection = true;
    //     this.isWalking = true;
    //     this.x -= this.speed;
    // }
}