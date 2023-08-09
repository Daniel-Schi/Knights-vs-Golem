class Level {
    enemies;
    clouds;
    backgroundObject;
    swords;
    level_end_x = 3500;


    constructor(enemies, clouds, backgroundObject, swords) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
        this.swords = swords;
    }
} 