const menuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('#mobileNav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuButton.textContent = isOpen ? 'Close' : 'Menu';
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menu';
    });
  });
}

const sponsorTrack = document.querySelector('[data-marquee-track]');

if (sponsorTrack && !sponsorTrack.dataset.cloned) {
  const cards = Array.from(sponsorTrack.children);

  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    sponsorTrack.appendChild(clone);
  });

  sponsorTrack.dataset.cloned = 'true';
}
