(() => {
  const allowed = new Set(['en', 'de', 'ar']);
  const params = new URLSearchParams(window.location.search);
  let lang = (params.get('lang') || 'en').toLowerCase().split('-')[0];
  if (!allowed.has(lang)) lang = 'en';

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-legal-lang]').forEach((node) => {
    node.hidden = node.getAttribute('data-legal-lang') !== lang;
  });

  document.querySelectorAll('[data-lang-link]').forEach((link) => {
    const active = link.getAttribute('data-lang-link') === lang;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
})();