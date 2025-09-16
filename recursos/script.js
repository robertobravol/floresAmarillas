

onload = () => {
    document.body.classList.remove("container");
    const playBtn = document.getElementById('playBtn');
    const audio = document.getElementById('audio');
    const songInfo = document.querySelector('.song-info');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            songInfo.style.display = 'block';
            playBtn.textContent = '⏸ Pausar canción';
        } else {
            audio.pause();
            playBtn.textContent = '🎵 Reproducir canción';
        }
    });
};


