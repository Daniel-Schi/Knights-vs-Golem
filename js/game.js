let canvas;
let world;
let keyboard = new Keyboard();
let character = new MovableObject();
win_Sound = new Audio('audio/win.wav');


function startGame() {
    document.getElementById('startscreen').classList.add('d-none');
    init();
}

function init() {
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    // soundEffects();
}

function infoDescription() {
    document.getElementById('info').classList.remove('d-none');
}

function closeInfo() {
    document.getElementById('info').classList.add('d-none');
}

function controllerDescription() {
    document.getElementById('controller').classList.remove('d-none');
}

function closeController() {
    document.getElementById('controller').classList.add('d-none');
}

function restartGame() {
    document.getElementById('startscreen').classList.remove('d-none');
    document.getElementById('youLoseGame').classList.add('d-none');
    document.getElementById('youWinGame').classList.add('d-none');
}

function youWinGame() {
    document.getElementById('youWinGame').classList.remove('d-none');
    stopGame();
}

function youLoseGame() {
    document.getElementById('youLoseGame').classList.remove.apply('d-none');
    stopGame();
}

/**
 * Stops the game by clearing all intervals.
 */
function stopGame() {
    clearAllIntervals();
}

/**
 * Clears all intervals (timeouts) that were set in the window.
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
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