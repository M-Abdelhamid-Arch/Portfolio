// === INIT AOS ===
AOS.init({ duration: 700, easing: 'ease-out', once: true, offset: 60 });

// === ACTIVE NAV ON SCROLL ===
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = { threshold: 0.3 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// === PROJECT FILTER ===
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// === MOBILE SIDEBAR TOGGLE ===
const menuToggle = document.createElement('button');
menuToggle.id = 'menu-toggle';
menuToggle.innerHTML = '<i class="bi bi-list"></i>';
menuToggle.style.cssText = `
  display: none;
  position: fixed;
  top: 1rem; left: 1rem;
  z-index: 200;
  background: #111110;
  color: #f0ece4;
  border: none;
  padding: 0.6rem 0.8rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
document.body.appendChild(menuToggle);

if (window.innerWidth <= 900) {
  menuToggle.style.display = 'block';
}

window.addEventListener('resize', () => {
  menuToggle.style.display = window.innerWidth <= 900 ? 'block' : 'none';
});

const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar when nav link clicked on mobile
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) sidebar.classList.remove('open');
  });
});

// === SKILL BAR ANIMATION ===
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width;
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => skillObserver.observe(fill));

// === CONTACT FORM ===
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();
    const body    = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:M.Abdelhamid.Arch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
