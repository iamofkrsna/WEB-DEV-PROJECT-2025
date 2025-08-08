//DISABLING THE RIGHT CLICK
document.addEventListener("contextmenu", (event) => event.preventDefault());

//PART 1 STARTs

//LINK TO OPEN FOR EVERY BOX
let boxesLinks = [
  "https://github.com/iamofkrsna/TIC-TAC-TOE-PROJECT-2025.git", //Link for box 0 and so on
];

//

let boxes = document.querySelectorAll(".box");
let boxImage = document.querySelectorAll(".box1-img");

let openedWindow;
for (let i = 0; i < boxes.length; i++) {
  boxImage[
    i
  ].style.backgroundImage = `url('/HOME-PAGE-FILES//IMAGES/box-${i}-image.jpg`;
  //Adding Links to Each Boxes
  boxes[i].addEventListener("click", () => {
    openedWindow = window.open(boxesLinks[i]);
  });
}

//PART 1 ENDS
