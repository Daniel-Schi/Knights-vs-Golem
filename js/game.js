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
    soundEffects(0.1);
    bindBtsPressEvents();
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
    document.getElementById('youLose').classList.add('d-none');
    document.getElementById('youWon').classList.add('d-none');
    document.getElementById('startscreen').classList.remove('d-none');
}

function youWon() {
   document.getElementById('youWon').classList.remove('d-none');
   console.log('testing');
    stopGame();
}

function youLose() {
    document.getElementById('youLose').classList.remove('d-none');
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
