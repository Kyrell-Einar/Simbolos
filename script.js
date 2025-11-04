// ======== SCROLL SUAVE ENTRE PÁGINAS ========
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ======== ANIMAÇÃO DE APARIÇÃO DAS SEÇÕES ========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// ======== DESTACAR O LINK ATUAL NO MENU ========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ======== MENU FIXO AO ROLAR ========
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ======== PEQUENA ANIMAÇÃO DE LOGO ========
const title = document.querySelector('header h1');
if (title) {
  title.addEventListener('mouseenter', () => {
    title.style.letterSpacing = '3px';
    title.style.transition = 'all 0.3s ease';
  });
  title.addEventListener('mouseleave', () => {
    title.style.letterSpacing = '1px';
  });
}
