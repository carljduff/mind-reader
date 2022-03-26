let bigText = document.getElementById("bigText");
let smallText = document.getElementById("smallText");
let goButton = document.getElementById("goButton");
let resetButton = document.getElementById("resetButton");
let pageButton = document.getElementById("pageButton");
let nine = "";
let page = 1;

function hide(variable) {
  variable.hidden = true;
}

function show(variable) {
  variable.hidden = false;
}

function nextPage() {
  page++;
  changeState();
}

function reset() {
    page = 1;
    changeState();
}

goButton.addEventListener("click", nextPage);
pageButton.addEventListener("click", nextPage);
resetButton.addEventListener("click", reset);

function shuffle() {
  let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
  let nineSymbol = symbols[Math.floor(Math.random() * 9)];
  nine = nineSymbol;
  let number = "";
  for (i = 0; i < 100; i++) {
    if (i % 9 === 0) {
      number += i + ": " + nineSymbol + "\n";
    } else {
      let random = symbols[Math.floor(Math.random() * 9)];
      number += i + ":" + random + "\n";
    }
  }
  return number;
}

function changeState() {
  switch (page) {
    case 1:
      bigText.innerText = "I can read your mind!";
      goButton.innerText = "GO";
      show(goButton);
      hide(resetButton);
      hide(pageButton);
      hide(smallText);
      break;

    case 2:
      bigText.innerText = "Pick a number from 01-99.";
      hide(goButton);
      resetButton.innerText = "RESET";
      show(resetButton);
      pageButton.innerText = "NEXT";
      show(pageButton);
      smallText.innerText = "When you have your number, click next.";
      show(smallText);
      break;

    case 3:
      bigText.innerText = "Add both digits together to get a new number.";
      resetButton.innerText = "RESET";
      pageButton.innerText = "NEXT";
      show(pageButton);
      smallText.innerText = "Ex: 14 is 1+4=5 \n \n Click next to proceed.";
      show(smallText);
      break;

    case 4:
      bigText.innerText = "Subtract your new number from the original number.";
      resetButton.innerText = "RESET";
      pageButton.innerText = "NEXT";
      show(pageButton);
      smallText.innerText = "Ex: 14-5=9 \n \n Click next to proceed.";
      show(smallText);
      break;

    case 5:
      bigText.innerText = shuffle();
      resetButton.innerText = "RESET";
      pageButton.innerText = "REVEAL";
      show(pageButton);
      smallText.innerText =
        "Find your new number. \n Note the symbol beside the number.";
      show(smallText);
      break;

    case 6:
      bigText.innerText = nine;
      hide(goButton);
      resetButton.innerText = "RESET";
      hide(pageButton);
      smallText.innerText = `Your symbol is: \n ${nine}`;
      show(smallText);
      break;
  }
}
changeState();



