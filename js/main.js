// Cáscara Archivo — main.js

// Reveal de tarjetas al cargar (index)
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 150 + i * 120);
});

// Reveal del hero en páginas de proyecto
const hero = document.querySelector('.project-hero');
if (hero) {
  hero.style.opacity = '0';
  hero.style.transform = 'translateY(12px)';
  hero.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
  setTimeout(() => {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 100);
}

// Scroll reveal para imágenes
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    }
  );
  revealElements.forEach(el => observer.observe(el));
}
