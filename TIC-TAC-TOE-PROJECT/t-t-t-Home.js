//DISABLING THE RIGHT CLICK
document.addEventListener("contextmenu", (event) => event.preventDefault());

let nextBtnX = document.querySelector(".player-x-next");
let playerXName = document.querySelector(".player-x-input");
let playerXWindow = document.querySelector(".player-x");
let warningX = document.querySelector(".warning-x");
let nameX = playerXName.value.trim();

let nextBtnO = document.querySelector(".player-o-next");
let playerOName = document.querySelector(".player-o-input");
let playerOWindow = document.querySelector(".player-o");
let warningO = document.querySelector(".warning-o");
let backBtnO = document.querySelector(".player-o-back");
let nameO = playerOName.value.trim();
//

let gameWindow = document.querySelector(".game-window");
let mainContent = document.querySelector(".main-content");
let loadingAnimation = document.querySelector(".loading-full-screen");

//On Name X TextBox Clicked
playerXName.addEventListener("click", () => {
  //Hiddening the warning if Visible
  setTimeout(() => {
    warningX.style.display = "none";
  }, Math.random() * (200 - 50) + 50);
});

//When Enter Key is Pressesd and X Window is open
playerXName.addEventListener("keypress", (pressedKey) => {
  if (pressedKey.key === "Enter") {
    //Checking if the Text Box is blank
    nameX = playerXName.value.trim();
    if (nameX === "") {
      warningX.innerText = "Please Enter Player X Name.";
      warningX.style.display = "flex";
    } else {
      loadingAnimation.style.display = "flex";
      setTimeout(() => {
        loadingAnimation.style.display = "none";
        //Loading the Player-O Window
        playerXWindow.style.display = "none";
        playerOWindow.style.display = "flex";
      }, Math.random() * (2000 - 700) + 700);
    }
  }
});

//On NEXT button Clicked
nextBtnX.addEventListener("click", () => {
  //Checking if the Text Box is blank
  nameX = playerXName.value.trim();
  if (nameX === "") {
    warningX.innerText = "Please Enter Player X Name.";
    warningX.style.display = "flex";
  } else {
    loadingAnimation.style.display = "flex";
    setTimeout(() => {
      loadingAnimation.style.display = "none";
      //Loading the Player-O Window
      playerXWindow.style.display = "none";
      playerOWindow.style.display = "flex";
    }, Math.random() * (2000 - 700) + 700);
  }
});

//On Name O TextBox Clicked
playerOName.addEventListener("click", () => {
  //Hiddening the warning if Visible
  setTimeout(() => {
    warningO.style.display = "none";
  }, Math.random() * (200 - 50) + 50);
});

//When Enter Key is Pressesd and O Window is open
playerOName.addEventListener("keypress", (pressedKey) => {
  if (pressedKey.key === "Enter") {
    nameO = playerOName.value.trim();
    console.log("HARI BOL");
    if (nameO === "") {
      warningO.innerText = "Please Enter Player O Name.";
      warningO.style.display = "flex";
    } else if (nameO.toLowerCase() == nameX.toLowerCase()) {
      warningO.innerText = "Player O Name Can't be Same as Player X Name";
      warningO.style.display = "flex";
    } else {
      loadingAnimation.style.display = "flex";
      setTimeout(() => {
        loadingAnimation.style.display = "none";
        //Loading the GAME Window
        playerOWindow.style.display = "none";
        //Game window opening code goes here
        console.log(`Player X Name: ${nameX}\n Player O Name: ${nameO}`);
      }, Math.random() * (2000 - 700) + 700);
    }
  }
});

//ON NEXT BUTTON O CLICKED
nextBtnO.addEventListener("click", () => {
  nameO = playerOName.value.trim();
  console.log("HARI BOL");
  if (nameO === "") {
    warningO.innerText = "Please Enter Player O Name.";
    warningO.style.display = "flex";
  } else if (nameO.toLowerCase() == nameX.toLowerCase()) {
    warningO.innerText = "Player O Name Can't be Same as Player X Name";
    warningO.style.display = "flex";
  } else {
    loadingAnimation.style.display = "flex";
    setTimeout(() => {
      loadingAnimation.style.display = "none";
      //Loading the GAME Window
      playerOWindow.style.display = "none";
      gameWindow.style.display = "flex";
      console.log(`Player X Name: ${nameX}\n Player O Name: ${nameO}`);
    }, Math.random() * (2000 - 700) + 700);
  }
});

backBtnO.addEventListener("click", () => {
  loadingAnimation.style.display = "flex";
  setTimeout(() => {
    playerOWindow.style.display = "none";
    playerXWindow.style.display = "flex";
    loadingAnimation.style.display = "none";
  }, Math.random() * (2000 - 700) + 700);
});

//Exporting PlayerX name and PlayerO name to gameLogic.js
export let playerX = nameX,
  playerO = nameO;
