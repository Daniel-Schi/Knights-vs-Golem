let canvas;
let world;
let keyboard = new Keyboard();
let character = new MovableObject();


/**
 * Initializes the game.
 */
function startGame() {
    document.getElementById('startscreen').classList.add('d-none');
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function init() {
    muteOnOff();
    bindBtsPressEvents();
}

/**
 * Opens the info container.
 */
function infoDescription() {
    document.getElementById('info').classList.remove('d-none');
}

/**
 * Closes the info container.
 */
function closeInfo() {
    document.getElementById('info').classList.add('d-none');
}

/**
 * Opens the controller container.
 */
function controllerDescription() {
    document.getElementById('controller').classList.remove('d-none');
}

/**
 * Closes the controller container.
 */
function closeController() {
    document.getElementById('controller').classList.add('d-none');
}

/**
 * Opens win the Game.
 */
function youWon() { 
    setTimeout(() => {
        document.getElementById('youWon').classList.remove('d-none');
        stopGame();
    }, 2000);
}

/**
 * Opens lose the Game.
 */
function youLose() {
    document.getElementById('youLose').classList.remove('d-none');
    stopGame();
}

/**
 * Restarts the game.
 */
function restartGame() {
    document.getElementById('youLose').classList.add('d-none');
    document.getElementById('youWon').classList.add('d-none');
    document.getElementById('startscreen').classList.remove('d-none');
    gameOverMusic.pause();
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
