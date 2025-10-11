const text = document.querySelector("p");
let dots = 0;

const intervalId = setInterval(() => {
  dots = (dots + 1) % 4; // Cycle de 0 à 3
  const dotsText = ".".repeat(dots);
  text.innerText = `En Construction${dotsText}`;
}, 500); // Toutes les 500 ms