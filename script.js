// Fonction pour animer le défilement fluide vers les sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la cible
        const targetSection = document.getElementById(targetId); // Récupère la section cible

        // Défilement fluide vers la section cible
        targetSection.scrollIntoView({
            behavior: 'smooth', // Défilement fluide
            block: 'start' // Alignement en haut de la section
        });
    });
});

// Fonction pour animer les éléments au défilement
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Si la section est visible à l'écran
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
}

// Ajoute un écouteur d'événement pour le défilement
window.addEventListener('scroll', animateOnScroll);

// Applique l'animation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll(); // Anime les sections visibles au chargement
});

// Fonction pour ajouter un effet de parallaxe à la section Hero
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;

    // Déplace l'arrière-plan de la section Hero en fonction du défilement
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
}

// Ajoute un écouteur d'événement pour l'effet de parallaxe
window.addEventListener('scroll', parallaxEffect);

// Fonction pour afficher un message de bienvenue dans la console
console.log('Bienvenue sur le portfolio de Nielsenvideo ! 🎥✨');

// Fonction pour gérer le clic sur les vidéos
document.querySelectorAll('.gallery-item video').forEach(video => {
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play(); // Joue la vidéo si elle est en pause
        } else {
            video.pause(); // Met en pause la vidéo si elle est en lecture
        }
    });
});

// Fonction pour afficher une alerte lors du clic sur le bouton CTA
document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du bouton
    alert('Vous allez être redirigé vers mes réalisations ! 🚀');
});

// Fonction pour ajouter un effet de survol sur les icônes des réseaux sociaux
document.querySelectorAll('.social-links a').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.2)'; // Agrandit l'icône au survol
    });

    icon.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)'; // Réinitialise la taille de l'icône
    });
});