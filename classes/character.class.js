class Character extends MovableObject {

    y = 290;
    width = 150;
    height = 150;
    speed = 1.5;
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
    world;
    walking_sound = new Audio('audio/walking-snow.wav');


    constructor() {
        super().loadImage('img/fantasy-knight/_PNG/1_KNIGHT/Knight_01__WALK_000.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -500) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);

    }

    jump() {

    }
}