let nextBtnX = document.querySelector(".player-x-next");
let mainContent = document.querySelector(".main-content");
let loadingAnimation = document.querySelector(".loading-full-screen");
let playerXName = document.querySelector(".player-x-input");
let warning = document.querySelector(".warning");

//On Name X TextBox Clicked
playerXName.addEventListener("click", () => {
  //Hiddening the warning if Visible
  setTimeout(() => {
    warning.style.display = "none";
  }, Math.random() * (200 - 50) + 50);
});

//On NEXT button Clicked
let nameX = playerXName.value.trim();
nextBtnX.addEventListener("click", () => {
  //Checking if the Text Box is blank
  nameX = playerXName.value.trim();
  if (nameX === "") {
    warning.innerText = "Please Enter Player X Name.";
    warning.style.display = "flex";
  } else {
    loadingAnimation.style.display = "flex";
    setTimeout(() => {
      loadingAnimation.style.display = "none";
      //Loading the Player-O Window
      /*WORK HERE *******************<<<<<<<<<<<<<<<<=============*/
    }, Math.random() * (3000 - 700) + 700);
  }
});
