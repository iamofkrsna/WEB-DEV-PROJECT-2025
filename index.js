//PART 1 STARTs
//LINKS FOR BOX CLICK

let boxesLinks = [
  "TIC-TAC-TOE-PROJECT/t-t-t-Home.html", //Link for box 0 and so on
  "https://www.youtube.com/",
  "www.haribol.com",
];

let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  console.log(i);
  boxes[i].addEventListener("click", () => {
    window.open(boxesLinks[i]);
  });
}

//PART 1 ENDS
