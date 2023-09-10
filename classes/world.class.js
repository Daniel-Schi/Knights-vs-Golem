class World {
    character = new Character();
    enemies = level1.enemies;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    sword;
    endboss;
    energy = 100;
    statusBarCharacter = new StatusBarCharacter();
    statusBarSword = new StatusBarSword();
    statusBarEndboss = new StatusBarEndboss();
    statusBarMagicDrank = new StatusBarMagicDrank();
    throwableObjects = [];
    collectedSwords = [];
    collectedMagicDrank = [];
    swordIsThrown = false;
    jumpOnGolem = false;
    endboss = this.level.endboss[0];
    isImune = false;

    gameMusic = new Audio('audio/music.wav');
    endbossMusic = new Audio('audio/endboss-music.wav');




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
        this.endboss.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 100);
        setInterval(() => {
            this.checkThrowObjects();
        }, 300);
    }


    checkCollisions() {
        this.checkCollisionToEnemies();
        this.checkCollisionToEndboss();
        this.checkCollisionToCollectSwords();
        this.checkCollisionToCollectMagicDrank();
        this.checkCollisonSwordWithEndboss();
        this.checkPositions(this.level.enemies);
        this.checkPositions(this.level.endboss);
        this.checkEndboss();
    }



    checkThrowObjects() {
        if (this.keyboard.F && this.collectedSwords.length > 0) {
            let sword = new ThrowableObject(this.character.x + 75, this.character.y + 0);
            this.throwableObjects.push(sword);
            this.collectedSwords.pop(); // Nach Abwurf einen Wert aus Array entfernen
            this.statusBarSword.setSwords(this.collectedSwords.length); // Wert an StatusBarBottles übergeben
            this.swordIsThrown = true;
        }
    }


    checkPositions(enemies) {
        enemies.forEach(enemy => {
            let distance = enemy.x - this.character.x;
            setTimeout(() => {
                if (distance <= 400 && !(distance <= 200)) {
                    this.checkEnemyAhead(enemy);
                } else if (distance >= -400 && !(distance >= -200)) {
                    this.checkEnemyBack(enemy);
                } else if (distance <= 200 && !(distance <= 0)) {
                    enemy.toClose = true;
                    this.setDirection(enemy, 0.9, true)
                } else if (distance >= -200 && !(distance >= 0)) {
                    enemy.toClose = true;
                    this.setDirection(enemy, 0.1, true)
                } else if ((this.level.level_end - enemy.x) <= 400) {
                    enemy.toClose = true;
                    enemy.enemieDirection = 0.9;
                }
            }, 150);
        })
    }


    checkEnemyAhead(enemy) {
        if (enemy instanceof Endboss) {
            enemy.toClose = true;
            this.setDirection(enemy, 0.9, false)
        } else {
            enemy.toClose = true;
            enemy.enemieDirection = 0.1;
        }
    }


    checkEnemyBack(enemy) {
        if (enemy instanceof Endboss) {
            enemy.toClose = true;
            this.setDirection(enemy, 0.1, false)
        } else {
            enemy.toClose = true;
            enemy.enemieDirection = 0.9;
        }
    }

    setDirection(enemy, direction, boolValue) {
        enemy.isSplashing = boolValue;
        enemy.enemieDirection = direction;
    }


    checkCollisionToEnemies() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy, 0, 0, 0, 0) && !this.character.isFalling() && !enemy.enemyisDead && !this.isAttackable) {
                this.character.jumpOnGolem = true;
                this.character.isHurt = true;
                this.character.hit(10);
                this.statusBarCharacter.setPercentage(this.character.energy);
                this.notAttackable(500);             
                setTimeout(() => {
                    this.character.isHurt = false;
                }, 1000);
            } else if (this.character.isColliding(enemy, 0, 0, 0, 0) && this.character.isFalling()) {
                enemy.isHurt = true;
                enemy.enemyIsDead = true;
                this.character.speedY = 20;
                this.notAttackable(1000);
                setTimeout(() => {
                    enemy.isHurt = false;
                }, 1000);
            }
            if (enemy.enemyIsDead) {
                setTimeout(() => {
                    this.level.enemies.splice(index, 1);
                }, 1000);

            }
        });
    }


    checkEndboss() {
        if (this.character.x <= 300 || this.endboss.isDead()) {
            // this.gameMusic.play();
            // this.endbossMusic.pause();
        } else {
            this.gameMusic.pause();
            // this.endbossMusic.play();
        }
    }


    checkCollisionToEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss, 0, 0, 0, 0) && !this.isAttackable) {
                this.character.isHurt = true;
                this.character.hit(10);
                this.statusBarCharacter.setPercentage(this.character.energy);
                this.notAttackable(500);
                setTimeout(() => {
                    this.character.isHurt = false;
                }, 1000);
            }
        })
    }

    checkCollisonSwordWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.throwableObjects.forEach((sword) => {
                if (this.endboss.isColliding(sword, 0, 0, 0, 0) && !this.isAttackable) {
                    this.notAttackable(500)
                    this.endboss.hit(20);
                    this.stopGameIfEndbossIsDead(endboss);
                    this.statusBarEndboss.setPercentage(this.endboss.energy);
                    console.log('hit', endboss.energy);
                }
            });
        })
    }

    notAttackable(time) {
        this.isAttackable = true;
        setTimeout(() => {
            this.isAttackable = false;
        }, time);
    }

    stopGameIfEndbossIsDead(endboss) {
        if (endboss.isDead()) {
            this.endboss.speed = 0;
            setTimeout(() => {
                clearAllIntervals();
            }, 500);
        }
    }


    checkCollisionToCollectSwords() {
        this.level.swords.forEach((sword, index) => {
            if (this.character.isColliding(sword, 0, 0, 0, 0)) {
                if (!this.collectedSwords.includes(sword)) { // wird nur ausgeführt, wenn Wert noch nicht vorhanden
                    this.collectedSwords.push(sword);
                    this.statusBarSword.setSwords(this.collectedSwords.length);
                    this.level.swords.splice(index, 1); // Entferne die kollidierte Schwert aus dem Array und entferne Bild
                }
            }
        })
    }

    checkCollisionToCollectMagicDrank() {
        this.level.magicDrank.forEach((magicDrank, index) => {
            if (this.character.isColliding(magicDrank, 0, 0, 0, 0)) {
                if (!this.collectedMagicDrank.includes(magicDrank)) { // wird nur ausgeführt, wenn Wert noch nicht vorhanden
                    this.collectedMagicDrank.push(magicDrank);
                    this.statusBarMagicDrank.setMagicDrank(this.collectedMagicDrank.length);
                    this.level.magicDrank.splice(index, 1); // Entferne die kollidierte Flasche aus dem Array und entferne Bild
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
            this.flipImage(mo)
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx)
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
        this.addToMap(this.statusBarMagicDrank);
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
        this.addObjectsToMap(this.level.magicDrank);
        this.addObjectsToMap(this.level.snow);
        this.addObjectsToMap(this.throwableObjects);
    }
}