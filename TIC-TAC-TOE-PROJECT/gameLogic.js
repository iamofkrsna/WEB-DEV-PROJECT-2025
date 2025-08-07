//THIS IS GAME LOGIC JS FILE FOR TIC TAC TOE GAME
let boxes = document.querySelectorAll(".resp-btn");
let reset = document.querySelector(".reset-button");
let menu = document.querySelector(".game-menu");
let xScore = document.querySelector(".score-num-x");
let oScore = document.querySelector(".score-num-o");
let dScore = document.querySelector(".score-num-d");
let xWins = 0;
let oWins = 0;
let draws = 0;
let winnerPatter = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
xScore.innerText = `${xWins} Wins`;
oScore.innerText = `${oWins} Wins`;
dScore.innerText = `${draws} `;

let chanceX = true;
for (let box of boxes) {
  box.innerText = "";
  box.addEventListener("click", () => {
    if (chanceX) {
      box.innerText = "X";
      box.style.color = "#70e000";
      box.disabled = true;
      chanceX = false;
    } else {
      box.innerText = "O";
      box.style.color = "#ffd60a";
      box.disabled = true;
      chanceX = true;
    }
    //IS THERE A WINNER
    let winP = checkWinner();
    if (winP.length != 0) {
      //There is a Winner

      //WHO IS THE WINNER
      if (boxes[winP[0]].innerText === "X") {
        xScore.innerText = `${++xWins} Wins`;
      } else {
        oScore.innerText = `${++oWins} Wins`;
      }
      for (let num of winP) {
        boxes[num].style.backgroundColor = "#3c096c";
        for (let box of boxes) {
          box.disabled = true;
        }
      }
      //OPEN GAME MENU
      setTimeout(() => {
        menu.style.display = "flex";
      }, Math.random() * (1000 - 700) + 700);
    } else {
      if (draw()) {
        dScore.innerText = `${++draws} `;
        console.log("It's Draw");
        //OPEN MENU
        setTimeout(() => {
          menu.style.display = "flex";
        }, Math.random() * (1000 - 700) + 700);
      }
    }
  });

  //
  box.addEventListener("mouseenter", () => {
    if (!box.disabled) {
      box.style.backgroundColor = "rgba(61, 36, 106, 0.1)";
    }
  });
  box.addEventListener("mouseout", () => {
    if (!box.disabled) {
      box.style.backgroundColor = "transparent";
    }
  });
}

reset.addEventListener("click", () => {
  for (let box of boxes) {
    box.style.backgroundColor = "transparent";
    box.innerText = "";
    chanceX = true;
    box.disabled = false;
  }
});

//FUNCTIONS
let draw = () => {
  for (let box of boxes) {
    if (!box.disabled) {
      return false;
    }
  }
  return true;
};
let checkWinner = () => {
  for (let pattern of winnerPatter) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 === val2 && val2 === val3 && val1 != "") {
      return pattern;
    }
  }
  return [];
};

/* #ffd60a  -> O */
/* #70e000  -> X */
