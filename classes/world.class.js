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
        new BackgroundObject('img/battleground/PNG/3/bridge.png', 0),
        new BackgroundObject('img/battleground/PNG/3/clouds 2.png', 0)
    ]; 
    tower = [
        new Tower()
    ]; 
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard){
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
        
        this.addObjectsToMap(this.tower);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.backgroundObject);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);
        

        // Draw wird immer wieder aufgerufen.
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}