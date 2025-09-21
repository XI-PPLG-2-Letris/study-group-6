const cards = document.querySelectorAll('.card');

function closeAllMenus() {
  document.querySelectorAll('.menu').forEach(menu => {
    menu.classList.remove('show');
  });
}

cards.forEach(card => {
  const toggle = card.querySelector('.toggle');
  const menu   = card.querySelector('.menu');

  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      } else {
        closeAllMenus();
        menu.classList.add('show');
      }
    });
  }
});

// klik di luar menu nutupin semuanya
document.addEventListener('click', () => {
  closeAllMenus();
});
