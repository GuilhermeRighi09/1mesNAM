// 1. Controle da Música
const btnPlay = document.getElementById('btn-play');
const musica = document.getElementById('musica');
const icone = btnPlay.querySelector('i');
const label = document.querySelector('.music-label');

btnPlay.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        icone.classList.replace('fa-play', 'fa-pause');
        label.innerText = "Tocando: Como um Anjo";
    } else {
        musica.pause();
        icone.classList.replace('fa-pause', 'fa-play');
        label.innerText = "Nossa música 🎵";
    }
});

// 2. Inicialização do Carrossel Automático
const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// 3. Contagem de Dias
function atualizarContador() {
    const dataInicio = new Date('2025-11-20T00:00:00'); // Data do início
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    document.getElementById('countdown').innerText = `Há ${dias} dias a colecionar sorrisos`;
}
atualizarContador();

// 4. Efeito de Aparecer as Seções ao Fazer Scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});