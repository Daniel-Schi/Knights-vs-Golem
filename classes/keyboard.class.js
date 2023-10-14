class Keyboard {
  
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    UP = false;
    DOWN = false;
    F = false;
} 


window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") { // Arrow Right
        keyboard.RIGHT = true;
    }
    if (event.key === "ArrowLeft") { // Arrow Left
        keyboard.LEFT = true;
    }
    if (event.key === "ArrowUp") { // Arrow Up
        keyboard.UP = true;
    }
    if (event.key === "ArrowDown") { // Arrow Down
        keyboard.DOWN = true;
    }
    if (event.key === " ") { // Spacebar
        keyboard.SPACE = true;
    }
    if (event.key === "f") { // Button F
        keyboard.F = true;
    }
});

window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight") { // Arrow Right
        keyboard.RIGHT = false;
    }
    if (event.key === "ArrowLeft") { // Arrow Left
        keyboard.LEFT = false;
    }
    if (event.key === "ArrowUp") { // Arrow Up
        keyboard.UP = false;
    }
    if (event.key === "ArrowDown") { // Arrow Down
        keyboard.DOWN = false;
    }
    if (event.key === " ") { // Spacebar
        keyboard.SPACE = false;
    }
    if (event.key === "f") { // Button F
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