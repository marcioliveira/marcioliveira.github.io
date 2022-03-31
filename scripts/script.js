const arrowLeft = document.querySelector(".button-arrow.-left");
const arrowRight = document.querySelector(".button-arrow.-right");
const elements = document.querySelector(".elements");

let move = 100;

arrowLeft.addEventListener("click", () => {
  move = move - 100;
  elements.style = `transform: translateX(${move}px)`;
  console.log("cheguei aqui");
});

arrowRight.addEventListener("click", () => {
  move = move + 100;
  elements.style = `transform: translateX(${move}px)`;
});
