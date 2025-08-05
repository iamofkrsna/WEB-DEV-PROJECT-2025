let nextBtnX = document.querySelector(".player-x-next");
let mainContent = document.querySelector(".main-content");
let loadingAnimation = document.querySelector(".loading-full-screen");

console.dir(loadingAnimation);

nextBtnX.addEventListener("click", () => {
  loadingAnimation.style.display = "flex";
  setTimeout(() => {
    loadingAnimation.style.display = "none";
  }, Math.random() * (3000 - 700) + 700);
});
