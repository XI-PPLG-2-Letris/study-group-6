let slides = document.querySelectorAll('.fungsi');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === i) slide.classList.add('active');
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    const preview = document.getElementById('preview');
    const imgButtons = document.querySelectorAll('.img-buttons .btn');
  
    imgButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-img');
        preview.innerHTML = `<img src="${src}" alt="preview">`;
  
        imgButtons.forEach(b => b.classList.remove('nyala'));
        btn.classList.add('nyala');
      });
    });
});

