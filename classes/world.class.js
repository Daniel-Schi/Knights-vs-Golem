class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    sword;
    endboss;
    statusBarCharacter = new StatusBarCharacter();
    statusBarSword = new StatusBarSword();
    statusBarEndboss = new StatusBarEndboss();
    throwableObjects = [];
    collectedSwords = [];



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.endboss = this.level.endboss[0];
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisionToEnemies();
            this.checkThrowObjects();
            this.checkCollisionToCollectSwords();
            this.checkCollisionToEndboss();
        }, 100);
    }

    checkThrowObjects() {
        if (this.keyboard.F && this.collectedSwords.length > 0) {
            let sword = new ThrowableObject(this.character.x + 75, this.character.y + 0);
            this.throwableObjects.push(sword);
            this.collectedSwords.pop(); // Nach Abwurf einen Wert aus Array entfernen
            this.statusBarSword.setSwords(this.collectedSwords.length); // Wert an StatusBarBottles übergeben
        }
    }

    checkCollisionToEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss, 100, 0, 300, 0)) {
                this.character.hit();
                this.statusBarCharacter.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionToEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy, 0, 0, 0, 0)) {
                this.character.hit();
                this.statusBarCharacter.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionToCollectSwords() {
        this.level.swords.forEach((sword, index) => {
            if (this.character.isColliding(sword, 0, 0, 0, 0)) {
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
        this.drawFrame(mo);
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
        this.addToMap(this.statusBarEndboss);
    }

    /**
     * Add all objects to the map.
     */
    addToTheMap() {
        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.swords);
        this.addObjectsToMap(this.level.snow);
        this.addObjectsToMap(this.throwableObjects);
    }


    drawFrame(mo) {
        if (mo instanceof Character || mo instanceof Golem || mo instanceof GolemSmall || mo instanceof Endboss) {
            this.ctx.beginPath();
            this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = 'blue';
            this.ctx.stroke();
        }
    }
}