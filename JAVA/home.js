
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const audio = document.getElementById('background-audio');

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    window.addEventListener('load', () => {
        const audio = document.getElementById('background-audio');
        audio.muted = false; // Nyahbisukan audio selepas muatan
        audio.play().catch(error => {
            console.log('Audio autoplay disekat oleh pelayar:', error);
        });
    });
