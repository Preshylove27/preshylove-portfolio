const navbar = document.querySelector('.navbar');
const revealItems = document.querySelectorAll('.reveal');

const handleScroll = () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

const revealOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

document.addEventListener('DOMContentLoaded', () => {
  handleScroll();
  revealOnScroll();
});

window.addEventListener('scroll', handleScroll);

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  button.textContent = 'Message Ready';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    event.currentTarget.reset();
  }, 1800);
});
