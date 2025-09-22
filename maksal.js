const cards = document.querySelectorAll('.card');

function closeAllMenus() {
  document.querySelectorAll('.menu').forEach(menu => {
    menu.classList.remove('show');
  });
}

cards.forEach(card => {
  const toggle = card.querySelector('.toggle'); // teks
  const plus   = card.querySelector('.plus');   // tanda +
  const menu   = card.querySelector('.menu');

  function handleClick(e) {
    e.stopPropagation();
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    } else {
      closeAllMenus();
      menu.classList.add('show');
    }
  }

  if (toggle && menu) toggle.addEventListener('click', handleClick);
  if (plus && menu) plus.addEventListener('click', handleClick);
});

document.addEventListener('click', () => {
  closeAllMenus();
});
