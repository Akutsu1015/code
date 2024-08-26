(function () {
    "use strict";

    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlide = 0;

    // Fonction pour mettre à jour la visibilité des slides et des dots
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        updateDots(index);
    }

    // Fonction pour mettre à jour l'état des dots
    function updateDots(index) {
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Fonction pour aller à un slide spécifique
    function slideTo(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentSlide = index;
        updateSlide(currentSlide);
    }

    // Création des dots de navigation
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => slideTo(i));
        dotsContainer.appendChild(dot);
    });

    // Ajout des événements pour les boutons de navigation
    prev.addEventListener('click', () => slideTo(currentSlide - 1));
    next.addEventListener('click', () => slideTo(currentSlide + 1));

    // Gestion des événements de balayage tactile
    let startX = 0;
    slides.forEach(slide => {
        slide.addEventListener('touchstart', event => {
            startX = event.touches[0].clientX;
        });

        slide.addEventListener('touchend', event => {
            const endX = event.changedTouches[0].clientX;
            if (startX > endX + 50) slideTo(currentSlide + 1);
            if (startX < endX - 50) slideTo(currentSlide - 1);
        });
    });

    // Initialiser l'affichage
    updateSlide(currentSlide);
})();
