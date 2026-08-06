// Lala Land Kids — shared site behavior

// Mobile nav
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');
if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// EN / RU toggle (persisted). Pages without Russian content simply have no .ru spans.
const langToggle = document.getElementById('langToggle');
function setLang(lang) {
  document.body.dataset.lang = lang;
  if (langToggle) langToggle.textContent = lang === 'en' ? 'RU' : 'EN';
  document.documentElement.lang = lang;
  try { localStorage.setItem('llk-lang', lang); } catch (e) {}
}
try {
  const saved = localStorage.getItem('llk-lang');
  if (saved) setLang(saved);
} catch (e) {}
if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLang(document.body.dataset.lang === 'en' ? 'ru' : 'en');
  });
}

// Reveal on scroll — progressive enhancement only. The hidden state is armed via
// html.js-anim, and a safety timeout reveals everything in case observers never fire.
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-anim');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')), 1800);
}

// Current year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact is phone-first (no email shown on the site) — no form handlers needed.
