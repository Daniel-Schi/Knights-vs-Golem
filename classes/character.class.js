class Character extends MovableObject {

    IMAGES_IDLE = [
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__IDLE_000.png'
    ];

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

    IMAGES_ATTACK = [
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_000.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_001.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_002.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_003.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_004.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_005.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_006.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_007.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_008.png',
        'img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__ATTACK_009.png'
    ];

    y = 80;
    width = 170;
    height = 150;
    speed = 8;
    jumpOnGolem = false;
    offset_x = 50; // move to the right
    offset_y = 15; // move down
    offset_width = 80; // move to the left
    offset_height = 30; // move up
    world;
    triggert = false;


    constructor() {
        super().loadImage('img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
    }

    /**
    * Says whether you are above the ground and your speed is less than 0
    */
    isFalling() {
        return this.isAboveGround() && this.speedY < 0;
    }

    /**
    * Initializes the animation intervals for character movements and animations.
    */
    animate() {
        setInterval(() => {
            this.movesCharacter();
        }, 1000 / 40);

        setInterval(() => {
            this.animationsCharacter();
        }, 100);
    }

    /**
     * Updates character movements based on keyboard input.
     */
    movesCharacter() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
        }
        if (this.world.keyboard.LEFT && this.x > -500) {
            this.moveLeft();
            this.otherDirection = true;
        }
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            jump_sound.play();
            walking_sound.pause();
        }
        if (this.world.keyboard.F && !this.isDead()) {
            this.characterIsThrowing()
        }
        this.world.camera_x = -this.x + 50;
        this.triggerAnimation();
    }

    /**
    * Handles character animations based on different states.
    */
    animationsCharacter() {
        if (this.isDead()) {
            this.playCharacterAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt) {
            this.playAnimation(this.IMAGES_HURT);
            hurt_sound.play();
        } else if (this.isAboveGround()) {
            this.characterIsJumping();
        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
                walking_sound.play();
            }
            else {
                walking_sound.pause();
            }
        }
    }

    /**
    * When trigger ist true, than play the enemy animation.
    */
    triggerAnimation() {
        if (this.triggert) {
            this.playEnemyAnimation(this.IMAGES_ATTACK);
        }
    };

    /**
    * Initializes the jumping animation of the character with an setTimeout for ending the jumping animation.
    */
    characterIsJumping() {
        this.playAnimation(this.IMAGES_JUMPING);
        setTimeout(() => {
           this.playAnimation(this.IMAGES_IDLE);
        }, 600);
    }

    /**
     * Initializes the throwing animation of the character with an setTimeout for ending the throwing animation
     */
    characterIsThrowing() {
        this.triggert = true;
        setTimeout(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 1000);
    }
}