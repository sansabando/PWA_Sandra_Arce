const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/opponent.png",
    OPPONENT_PICTURE_DEAD = "assets/opponent_dead.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/player.png",
    PLAYER_PICTURE_DEAD = "assets/player_dead.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/shot1.png",
    SHOT_PICTURE_OPPONENT = "assets/shot2.png",
    SHOT_WIDTH = 1.5;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}


var game;
document.addEventListener("DOMContentLoaded", () => {
    game = new Game();
    game.start();
}
);
let deferredPrompt;

document.addEventListener('DOMContentLoaded', () => {
    const installButton = document.getElementById('installButton');

    if (!installButton) {
        console.error('El botón installButton no existe en el DOM');
        return;
    }

    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';
        installButton.addEventListener('click', () => {
          
            deferredPrompt.prompt();

       
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('El usuario aceptó la instalación');
                } else {
                    console.log('El usuario declinó la instalación');
                }
                deferredPrompt = null;
                installButton.style.display = 'none';
            });
        });
    });
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.error('Error al registrar el Service Worker:', error);
        });
}

