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
    // endbossWasHit = false;
    // endbossCollision = false;
    swordIsThrown = false;
    endboss = this.level.endboss[0];
    gameMusic = new Audio('audio/music.wav');
    endbossMusic = new Audio('audio/endboss-music.wav');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        // this.endboss = this.level.endboss[0];
    }


    setWorld() {
        this.character.world = this;
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
        this.checkPositions();
        this.checkEndboss();
        // this.checkCollisionToEndbossToThrowWithSword();
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

    checkThrowObjects() {
        if (this.keyboard.F && this.collectedSwords.length > 0) {
            let sword = new ThrowableObject(this.character.x + 75, this.character.y + 0);
            this.throwableObjects.push(sword);
            this.collectedSwords.pop(); // Nach Abwurf einen Wert aus Array entfernen
            this.statusBarSword.setSwords(this.collectedSwords.length); // Wert an StatusBarBottles übergeben
            this.swordIsThrown = true;
        }
    }

    checkCollisionToEnemies() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy, 0, 0, 0, 0)) {
                if (this.character.isAboveGround() && !this.character.isHurt() && this.character.speedY < 0)
                    enemy.enemyIsDead = true;
                    this.level.enemies.splice(index, 1);
                this.character.characterHit();
                this.statusBarCharacter.setPercentage(this.character.energy);
            }
        });
    }

    checkPositions() {
        this.level.enemies.forEach(enemy => {
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
        enemy.attackCharacter = boolValue;
        enemy.enemieDirection = direction;
    }

    // checkWhoIsHurt(enemy) {
    //     if (!enemy.isDead()) {
    //         if (enemy instanceof Golem && enemy instanceof GolemSmall) {
    //             // ratHurtSound.play();
    //             enemy.hit(50);
    //         } else if (enemy instanceof Endboss) {
    //             // bossHurtSound.play();
    //             enemy.hit(20);
    //         }
    //     }
    // }

    // checkCollisionToEnemies() {
    //     this.level.enemies.forEach((enemy, index) => {
    //         if (this.character.isColliding(enemy, 0, 0, 0, 0)) {
    //             if (this.character.isAboveGround() && this.character.speedY < 0) {
    //                 this.character.jumpOnGolem = true;
    //                 if (Golem) {
    //                     enemy.golemDead = true;
    //                 } else if (enemy.GolemSmall) {
    //                     enemy.golemSmallDead = true;
    //                 }enemy.
    //                 setTimeout(() => {
    //                     this.level.enemies.splice(index, 1);
    //                     this.character.jumpOnGolem = false;
    //                 }, 500);
    //             } else if (!this.character.jumpOnGolem) {
    //                 this.character.hit();
    //                 this.statusBarCharacter.setPercentage(this.character.energy);
    //             }
    //         }
    //     });
    // }


    checkCollisionToEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss, 30, 0, 130, 0)) {
                this.character.characterHit();
                this.statusBarCharacter.setPercentage(this.character.energy);
            }
        })
    }

    checkCollisonSwordWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.throwableObjects.forEach((sword, index) => {
                if (sword.isColliding(endboss)) {
                    this.level.swords.splice(index, 1);
                    if (!endboss.isHurt()) {
                        endboss.endbossHit();
                    }
                    this.throwableObjects.forEach((object) => {
                        if (object.isColliding(endboss) && !endboss.isDead) {
                            object.setCollidedWithEnemy(true);
                            this.endboss.endbossHit();
                            this.statusBarEndboss.setPercentage(this.endboss.energy);
                        }
                    });
                }
            })
        })
    }



    // checkCollisionToEndbossToThrowWithSword() {
    //     let collisionEndboss = false;
    //     this.throwableObjects.forEach((sword) => {
    //         if (sword.isColliding(this.level.endboss)) {
    //             collisionEndboss = true;
    //         }
    //     });
    //     if (collisionEndboss && !this.endbossWasHit) {
    //         this.level.endboss.endbossHit;
    //         this.statusBarEndboss.setPercentage(this.level.endboss.energy);
    //         this.endbossWasHit = true;
    //     }
    //     return collisionEndboss;
    // }


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