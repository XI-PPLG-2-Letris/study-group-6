const slid = document.querySelectorAll(".revolusi");
const indicatorsContainer = document.querySelector(".indicators");
let inde = 0;

slid.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".indicators span");

function showRevolusi(i) {
  document.querySelector(".capek").style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[i].classList.add("active");
}

function nextRevolusi() {
  inde = (inde + 1) % slid.length;
  showRevolusi(inde);
}

setInterval(nextRevolusi, 4000); 

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    inde = i;
    showRevolusi(inde);
  });
});