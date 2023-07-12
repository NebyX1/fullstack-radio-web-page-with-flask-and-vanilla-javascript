const audio = new Audio('http://usa15.ciudaddigital.com.uy:8040/FederalFM');

const playButton = document.getElementById('playButton');
const playIcon = playButton.querySelector('i');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        audio.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
});

const volumeControl = document.getElementById('volume');
volumeControl.addEventListener('change', () => {
    audio.volume = volumeControl.value;
});