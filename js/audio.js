walking_sound = new Audio('audio/walking-snow.wav');
hurt_sound = new Audio('audio/hurt1.wav');
jump_sound = new Audio('audio/jump.wav');
gameMusic = new Audio('audio/music.wav');
endbossMusic = new Audio('audio/endboss-music.wav');
winSound = new Audio('audio/win.wav');
enemyDead_sound = new Audio('audio/hurt.wav');
gameOverMusic = new Audio('audio/gameOversMusic.wav');
dead_Sound = new Audio('audio/monster-dead.wav');
throw_sound = new Audio('audio/throw.wav');
blood_sound = new Audio('audio/blood_splatter.mp3');

let muteOnOfftoggle = false;


function soundEffects(vol) {
    walking_sound.volume = vol;
    hurt_sound.volume = vol;
    jump_sound.volume = vol;
    enemyDead_sound.volume = vol;
    dead_Sound.volume = vol;
    throw_sound.volume = vol;
    blood_sound.volume = vol;
}

function musicEffects(vol) {
    gameOverMusic.volume = vol;
    winSound.volume = vol;
    gameMusic.volume = vol;
    endbossMusic.volume = vol;
}

function muteOnOff() {
    const muteImage = document.getElementById('mute');

    if (muteOnOfftoggle) {
        muteOnOfftoggle = false;
        soundEffects(0);
        musicEffects(0);
        muteImage.src = "img/start-icons/mute.png"; // Ändern Sie das Bild, um den eingeschalteten Ton anzuzeigen.
    } else {
        muteOnOfftoggle = true;
        soundEffects(1);
        musicEffects(0.1);
        muteImage.src = "img/start-icons/volume (2).png"; // Ändern Sie das Bild, um den stummen Zustand anzuzeigen.
    }
}