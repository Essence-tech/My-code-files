// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function handleReveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);
