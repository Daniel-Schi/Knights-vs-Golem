class World {
    character = new Character();
    enemies = [
        new Golem,
        new Golem,
        new Golem,
        new Golem,
    ]
    clouds = [
        new Clouds()
    ];
    backgroundObject = [
        new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', -719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', -719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', -719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', -719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', -719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', -719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Snow.png', -719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 0, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 0, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 0, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 0, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 0, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 0, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Snow.png', 0, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Snow.png', 719, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Sky.png', 719 * 2, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/BG.png', 719 * 2, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Middle.png', 719 * 2, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Foreground.png', 719 * 2, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_01.png', 719 * 2, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Ground_02.png', 719 * 2, 0),
        new BackgroundObject('img/background-Winter/BG_01/Layers/Snow.png', 719 * 2, 0),

    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        // this.addObjectsToMap(this.tower);
        this.addObjectsToMap(this.backgroundObject);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);

        this.ctx.translate(-this.camera_x, 0);


        // Draw wird immer wieder aufgerufen.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * - 1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * - 1;
            this.ctx.restore();
        }
    }
}