class Character extends MovableObject {

    y = 190;
    width = 150;
    height = 150;
    speed = 3;

    IMAGES_WALKING = [
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_000.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_001.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_002.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_003.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_004.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_005.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_006.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_007.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_008.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_009.png',
    ];

    IMAGES_JUMPING = [
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_000.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_001.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_002.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_003.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_004.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_005.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_006.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_007.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_008.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__JUMP_009.png'
    ];

    IMAGES_DEAD = [
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_000.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_001.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_002.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_003.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_004.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_005.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_006.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_007.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_008.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_009.png'
    ];

    IMAGES_REALLYDEAD = [
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__DIE_009.png'
    ];

    IMAGES_HURT = [
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_000.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_001.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_002.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_003.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_004.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_005.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_006.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_007.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_008.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__HURT_009.png'
    ];
    world;
    walking_sound = new Audio('audio/walking-snow.wav');
    hurt_sound = new Audio('audio/hurt1.wav');
    jump_sound = new Audio('audio/jump.wav');

    constructor() {
        super().loadImage('img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_REALLYDEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
        this.isJumping = false;
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -500) {
                this.moveLeft();
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 50;
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jump_sound.play();
            }
        }, 1000 / 60);


        setInterval(() => {
            if (this.isReallyDead()) {
                this.loadAnimation(this.IMAGES_REALLYDEAD);
            } else if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.hurt_sound.play();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }


    jump() {
        this.speedY = 20;
    }
}