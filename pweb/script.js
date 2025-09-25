document.addEventListener('DOMContentLoaded', function() {

    // --- Menandai Navigasi Aktif saat Scroll ---
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const contentArea = document.querySelector('.content');

    if (contentArea) {
        contentArea.addEventListener('scroll', () => {
            let current = 'hero';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const scrollPosition = contentArea.scrollTop + contentArea.offsetTop;

                if (scrollPosition >= sectionTop - (section.clientHeight / 2)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // --- KONTROL MUSIK LATAR ---
    const audio = document.getElementById('musik-latar');
    const tombolMusik = document.getElementById('tombol-musik');

    if (audio && tombolMusik) {
        audio.volume = 0.3;

        tombolMusik.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                tombolMusik.classList.add('playing');
            } else {
                audio.pause();
                tombolMusik.classList.remove('playing');
            }
        });
    }
});