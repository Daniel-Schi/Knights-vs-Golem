class ThrowableObject extends MovableObject {

throw_sound = new Audio('audio/throw.wav');

    constructor(x, y) {
        super().loadImage('img/icons-weapons/PNG/daggers (5).png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 12;
        this.applyGravity();      
        if (!this.isThrowing) { // Überprüfen, ob das Schwert bereits geworfen wurde
            this.isThrowing = true; // Markieren, dass das Schwert geworfen wurde
            this.throw_sound.play(); // Sound abspielen
            setInterval(() => {
                this.x += 5;
            }, 25);
    
            setTimeout(() => {
                this.isThrowing = false; // Zurücksetzen, um den Sound erneut abzuspielen, wenn erneut geworfen wird
            }, 1000); 
        }
    }

}