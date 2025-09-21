let slides = document.querySelectorAll('.fungsi');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) slide.classList.add('active');
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
  
        imgButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
});
const slid = document.querySelectorAll(".revolusi");
const indicatorsContainer = document.querySelector(".indicators");
let inde = 0;

slid.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".indicators span");

function showSlide(i) {
  document.querySelector(".capek").style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[i].classList.add("active");
}

function nextSlide() {
  inde = (inde + 1) % slid.length;
  showSlide(inde);
}

setInterval(nextSlide, 4000); 

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    inde = i;
    showSlide(inde);
  });
});
