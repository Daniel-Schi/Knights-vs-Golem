class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    sword;
    statusBarCharacter = new StatusBarCharacter();
    statusBarSword = new StatusBarSword();
    throwableObjects = [];
    collectedSwords = [];



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
    }

    checkThrowObjects() {
        if (this.keyboard.F && this.collectedSwords.length > 0) {
            let sword = new ThrowableObject(this.character.x + 75, this.character.y + 0);
            this.throwableObjects.push(sword);

            this.collectedBottles.pop(); // Nach Abwurf einen Wert aus Array entfernen
            this.statusBarBottles.setBottles(this.collectedBottles.length); // Wert an StatusBarBottles übergeben
        }
    }


    checkCollisions() {
        this.checkCollisionSwordsToCollect();
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarCharacter.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionSwordsToCollect() {
        this.level.swords.forEach((sword, index) => {
            if (this.character.isColliding(sword)) {
                if (!this.collectedSwords.includes(sword)) { // wird nur ausgeführt, wenn Wert noch nicht vorhanden
                    this.collectedSwords.push(sword);
                    this.statusBarSword.setSwords(this.collectedSwords.length);
                    this.level.swords.splice(index, 1); // Entferne die kollidierte Flasche aus dem Array und entferne Bild
                }

            }
        })
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addToTheMap();
        this.ctx.translate(-this.camera_x, 0);
        this.addToFixedObjects();
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
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
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * - 1;
    };

    flipImageBack(mo) {
        mo.x = mo.x * - 1;
        this.ctx.restore();
    };

    /**
     * Add all fixed objects to the map.
     */
    // ------ Space for fixed objects ------
    addToFixedObjects() {
        this.addToMap(this.statusBarCharacter);
        this.addToMap(this.statusBarSword);
    }

    /**
     * Add all objects to the map.
     */
    addToTheMap() {
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.swords);
        this.addObjectsToMap(this.throwableObjects);
    }
}