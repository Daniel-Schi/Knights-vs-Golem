class World {

    character = new Character();
    enemies = level1.enemies;
    sword = level1.sword;
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
    isAttackable = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
      * .Sets up the world and assigns the world to the character and endboss.
      */
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    /**
      * Run functions at intervals.
      */
    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 100);
        setInterval(() => {
            this.checkThrowObjects();
        }, 300);
    }

    /**
    * Checks various collision scenarios.
    */
    checkCollisions() {
        this.checkCollisionToEnemies();
        this.checkCollisionToEndboss();
        this.checkCollisionToCollectSwords();
        this.checkCollisionToCollectMagicDrank();
        this.checkCollisonSwordWithEndboss();
        this.checkPositions(this.level.enemies);
        this.checkPositions(this.level.endboss);
        this.checkEndboss();
        this.checkIfSwordIsOutOfLevel();
        this.checkWinGame();
    }

    /**
    * Checks if the character can throw an object and throws the object if possible.
    */
    checkThrowObjects() {
        if (this.keyboard.F && this.collectedSwords.length > 0) {
            let sword = new ThrowableObject(this.character.x + 75, this.character.y + 0);
            this.throwableObjects.push(sword);
            this.collectedSwords.pop();
            this.statusBarSword.setSwords(this.collectedSwords.length);
            this.swordIsThrown = true;
        }
    }

    /**
     * checks whether the sword can be deleted in the y-axis
     */
    checkIfSwordIsOutOfLevel() {
        this.throwableObjects.forEach((index, throwableObjects) => {
            if (throwableObjects.y >= 400) {
                this.throwableObjects.splice(index, 1);
            }
        })
    }

    /**
     * Checks the position distance between character and enemies.
     */
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

    /**
     * Checks the direction of the endboss in front.
     */
    checkEnemyAhead(enemy) {
        if (enemy instanceof Endboss) {
            enemy.toClose = true;
            this.setDirection(enemy, 0.9, false)
        } else {
            enemy.toClose = true;
            enemy.enemieDirection = 0.1;
        }
    }

    /**
     * Checks the direction of the endboss in back.
     */
    checkEnemyBack(enemy) {
        if (enemy instanceof Endboss) {
            enemy.toClose = true;
            this.setDirection(enemy, 0.1, false)
        } else {
            enemy.toClose = true;
            enemy.enemieDirection = 0.9;
        }
    }

    /**
     * Checks the direction of the enemy.
     */
    setDirection(enemy, direction, boolValue) {
        enemy.isSplashing = boolValue;
        enemy.enemieDirection = direction;
    }

    /**
    * Checks for collisions between the player character and enemies, and handles the consequences of the collisions.
    */
    checkCollisionToEnemies() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy, 0, 0, 0, 0) && !this.character.isFalling() && !enemy.enemyisDead && !this.isAttackable) {
                this.enemyIfBlock();
            } else if (this.character.isColliding(enemy, 0, 0, 0, 0) && this.character.isFalling()) {
                this.enemyElseBlock(enemy, index);
            }
        });
    }

    /**
     * Outsourced function of check Collision to enemy.
     */
    enemyIfBlock() {
        this.character.jumpOnGolem = true;
        this.character.isHurt = true;
        this.character.hit(10);
        this.statusBarCharacter.setPercentage(this.character.energy);
        this.notAttackable(500);
        setTimeout(() => {
            this.character.isHurt = false;
        }, 1000);
        return;
    }

    /**
     * Outsourced function of check Collision to enemy.
     */
    enemyElseBlock(enemy, index) {
        enemy.isHurt = true;
        enemy.enemyIsDead = true;
        enemyDead_sound.play();
        this.character.speedY = 20;
        this.notAttackable(1000);
        setTimeout(() => {
            enemy.isHurt = false;
            this.enemies.splice(index, 1);
        }, 1000);
        return;
    }

    /**
     * Decides between is Attackable and not Attackable.
     */
    notAttackable(ms) {
        this.isAttackable = true;
        setTimeout(() => {
            this.isAttackable = false;
        }, ms);
    }

    /**
     * Checks the distance between character and endboss to play the corresponding music.
     */
    checkEndboss() {
        let distance = this.character.x - this.endboss.x;
        if (distance <= -700 || this.endboss.isDead()) {
            gameMusic.play(0.1);
            endbossMusic.pause();
        } else if(!this.endboss.isDead()) {
            this.endboss.endzone = true
            gameMusic.pause();
            endbossMusic.play(0.1);
        }
    }

    /**
     * Checks to win or lose game.
     */
    checkWinGame() {
        if (this.endboss.isDead() && this.collectedMagicDrank.length >= 3) {
            gameMusic.pause();
            endbossMusic.pause();
            winSound.play();
            dead_Sound.play();
            setTimeout(() => {
                youWon();
            }, 500);
        } else if (this.character.isDead()) {
            gameMusic.pause();
            endbossMusic.pause();
            gameOverMusic.play();
            setTimeout(() => {
                youLose();
            }, 2000);
        }
    }

    /**
    * Checks for collisions between character and endboss, and handles the consequences of the collisions.
    */
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

    /**
     * Checks for Collisions between sword and endboss, and handles the consequences of the collisions.
     */
    checkCollisonSwordWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.throwableObjects.forEach((sword) => {
                if (this.endboss.isColliding(sword, 0, 0, 0, 0) && !this.isAttackable) {
                    this.notAttackable(500)
                    this.endboss.hit(20);
                    this.statusBarEndboss.setPercentage(this.endboss.energy);
                }
            });
        })
    }

    /**
     * Checks for collisions between character and sword to collect them.
     */
    checkCollisionToCollectSwords() {
        this.level.swords.forEach((sword, index) => {
            if (this.character.isColliding(sword, 0, 0, 0, 0)) {
                if (!this.collectedSwords.includes(sword)) {
                    this.collectedSwords.push(sword);
                    this.statusBarSword.setSwords(this.collectedSwords.length);
                    this.level.swords.splice(index, 1);
                }
            }
        })
    }

    /**
     * Checks for collisions between character and magicdrank to collect them.
     */
    checkCollisionToCollectMagicDrank() {
        this.level.magicDrank.forEach((magicDrank, index) => {
            if (this.character.isColliding(magicDrank, 0, 0, 0, 0)) {
                if (!this.collectedMagicDrank.includes(magicDrank)) {
                    this.collectedMagicDrank.push(magicDrank);
                    this.statusBarMagicDrank.setMagicDrank(this.collectedMagicDrank.length);
                    this.level.magicDrank.splice(index, 1);
                }
            }
        })
    }

    /**
     * Executes the entire drawing process.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addToTheMap();
        this.ctx.translate(-this.camera_x, 0);
        this.addToFixedObjects();
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

     /**
    * Adds an array of objects to the drawing map.
    * @param {Array} objects - An array of objects to be added to the drawing map.
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    /**
    * Adds a movable object to the drawing map, potentially flipping the image horizontally.
    * @param {MovableObject} mo - The movable object to be added to the map.
    */
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

    /**
     * Flips the image horizontally for the given movable object.
     * @param {MovableObject} mo - The movable object whose image needs to be flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * - 1;
    };

    /**
     * Reverts the image flipping for the given movable object.
     * @param {MovableObject} mo - The movable object whose image flipping needs to be reverted.
     */
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