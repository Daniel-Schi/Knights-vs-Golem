class Keyboard {
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    UP = false;
    DOWN = false;
    F = false;
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

/**
 * Bind touch press events to control game movements.
 */
function bindBtsPressEvents() {
    document.getElementById("mobileMoveLeft").addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.LEFT = true;
    });
  
    document.getElementById("mobileMoveLeft").addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.LEFT = false;
    });
  
    document.getElementById("mobileMoveRight").addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.RIGHT = true;
    });
  
    document.getElementById("mobileMoveRight").addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.RIGHT = false;
    });
  
    document.getElementById("mobileJump").addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.SPACE = true;
    });
  
    document.getElementById("mobileJump").addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.SPACE = false;
    });
  
    document.getElementById("mobileThrow").addEventListener("touchstart", (event) => {
      event.preventDefault();
      keyboard.F = true;
    });
  
    document.getElementById("mobileThrow").addEventListener("touchend", (event) => {
      event.preventDefault();
      keyboard.F = false;
    });
  }