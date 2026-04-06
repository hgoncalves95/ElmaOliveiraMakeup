// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ================= ANIMAÇÃO AO SCROLL =================
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// ================= HEADER AO SCROLL =================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.padding = '20px 20px';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
  } else {
    header.style.padding = '30px 20px';
    header.style.boxShadow = 'none';
  }
});


// ================= MICRO INTERAÇÃO BOTÕES =================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});