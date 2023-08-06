let canvas;
let world; 
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
}


window.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) { // Arrow Right
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) { // Arrow Left
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) { // Arrow Up
        keyboard.UP = true;
    }
    if (event.keyCode == 40) { // Arrow Down
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) { // Spacebar
        keyboard.SPACE = true;
    }
    if (event.keyCode == 70) { // Button F
        keyboard.F = true;
    }
});

window.addEventListener("keyup", (event) => {
    if (event.keyCode == 39) { // Arrow Right
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) { // Arrow Left
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) { // Arrow Up
        keyboard.UP = false;
    }
    if (event.keyCode == 40) { // Arrow Down
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) { // Spacebar
        keyboard.SPACE = false;
    }
    if (event.keyCode == 70) { // Button F
        keyboard.F = false;
    }
});