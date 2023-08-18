class Level {
    endboss;
    enemies;
    clouds;
    snow;
    backgroundObject;
    swords;
    level_end_x = 3500;


    constructor(enemies, clouds, snow, backgroundObject, swords, endboss) {
        this.endboss = endboss;
        this.enemies = enemies;
        this.clouds = clouds;
        this.snow = snow;
        this.backgroundObject = backgroundObject;
        this.swords = swords;      
    }
} 