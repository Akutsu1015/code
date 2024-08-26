 

const images = document.querySelectorAll('img');

images.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.style.border = 'solid 1px yellow';
  });

  img.addEventListener('mouseleave', () => {
    img.style.border = 'none';
  });
});

window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.content li, article');

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = (rect.top >= 0) && (rect.bottom <= window.innerHeight);

    if (isVisible) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
});

// Animation des liens de catégorie (s'assurer que l'élément existe)
const categorieLinks = document.querySelectorAll('.categorie a');

categorieLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.opacity = 1;
    link.style.transform = 'translateY(0)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.opacity = 0;
    link.style.transform = 'translateY(20px)';
  });
});

// S'assurer que la section .colors existe et appliquer les animations correctement
const colors = document.querySelectorAll('.colors');

colors.forEach(color => {
  color.addEventListener('mouseenter', () => {
    color.style.opacity = 1;
    color.style.transform = 'translateY(0)';
    color.style.transition = 'all 0.5s ease-in-out 0.5s';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('.navbar-nav');

  navbarToggler.addEventListener('click', function () {
      navbarNav.classList.toggle('active');
  });
});