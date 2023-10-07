let canvas;
let world;
let keyboard = new Keyboard();
let character = new MovableObject();



function startGame() {
    document.getElementById('startscreen').classList.add('d-none');
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function init() {
    soundEffects(0.3);
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
    document.getElementById('youLoseGame').classList.add('d-none');
    document.getElementById('youWinGame').classList.add('d-none');
    document.getElementById('startscreen').classList.remove('d-none');
}

function youWinGame() {
    document.getElementById('youWinGame').classList.remove('d-none');
    stopGame();
}

function youLoseGame() {
    document.getElementById('youLoseGame').classList.remove('d-none');
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

/**
 * Toggles the fullscreen mode of the game.
 */
function toggleFullScreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        closeFullscreen();
    } else {
        openFullscreen();
    }
}

/**
 * Requests to open fullscreen mode.
 */
function openFullscreen() {
    let content = document.getElementById('content');
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.webkitRequestFullscreen) { /* Safari */
        content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) { /* IE11 */
        content.msRequestFullscreen();
    }
    document.getElementById('fullscreen').src = "img/start-icons/fullscreenIcon.png";
}

/**
 * Exits the fullscreen mode.
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    document.getElementById('fullscreen').src = "img/start-icons/fullscreenIcon.png";
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