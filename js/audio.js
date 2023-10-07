walking_sound = new Audio('audio/walking-snow.wav');
hurt_sound = new Audio('audio/hurt1.wav');
jump_sound = new Audio('audio/jump.wav');
gameMusic = new Audio('audio/music.wav');
endbossMusic = new Audio('audio/endboss-music.wav');
winSound = new Audio('audio/win.wav');
enemyDead_sound = new Audio('audio/hurt.wav');
gameOverMusic = new Audio('audio/gameOversMusic.wav');
let muteOnOfftoggle = false;


function soundEffects(vol) {
    walking_sound.volume = vol;
    hurt_sound.volume = vol;
    jump_sound.volume = vol;
    winSound.volume = vol;
    gameMusic.volume = vol;
    endbossMusic.volume = vol;
    enemyDead_sound.volume = vol;
    gameOverMusic.volume = vol;
    console.log('test audio');
}


function muteOnOff() {
    const muteImage = document.getElementById('mute');

    if (muteOnOfftoggle) {
        muteOnOfftoggle = false;
        soundEffects(0);
        muteImage.src = "img/start-icons/mute.png"; // Ändern Sie das Bild, um den eingeschalteten Ton anzuzeigen.
    } else {
        muteOnOfftoggle = true;
        soundEffects(0.1);
        muteImage.src = "img/start-icons/volume (2).png"; // Ändern Sie das Bild, um den stummen Zustand anzuzeigen.
    }
}