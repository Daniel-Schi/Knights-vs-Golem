class Level {
    enemies;
    clouds;
    backgroundObject;
    sword;
    level_end_x = 2200;


    constructor(enemies, clouds, backgroundObject, sword) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
        this.sword = sword;
    }
} 