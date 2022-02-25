let bigText = document.getElementById('bigText');
let smallText = document.getElementById('smallText');
let goButton = document.getElementById('goButton');
let resetButton = document.getElementById('resetButton');
let pageButton = document.getElementById('pageButton');
//let symbols = randomArrayShuffle(["!", "@", "#", "$", "%", "^", "&", "*", "+"]);
//let nineSymbol = randomArrayShuffle(symbols[0]);
//let number = "";
let page = 1;



//function to change page(attach to goButton & next)
function changePage() {
    page++;
    changeState();//function with page information   
    //goButton & page button both need this function on a click event
};

goButton.addEventListener('click', changePage())
pageButton.addEventListener('click', changePage())

//function to reset page
function reset() {
page = 1;
changeState();
//shuffle();



};

resetButton.addEventListener('click', reset())

//function to get numbers
/*function numberLoop () {
    for (i = 0; i < 100; i++) {
       if(number % 9 === 0) {
       number = number.push(i) + nineSymbol; 
       } else {
        number = number.push(i) + symbols;
       }
    }
}*/

let nine = "";
function shuffle() {
    let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
    //let nineSymbol = symbols[0];
    let nineSymbol = symbols[Math.floor(Math.random() * 9)]
    nine = nineSymbol;
    let number = "";
    for(i = 0; i < 100; i++) {
    if (i % 9 === 0) {
        number += i + ": " + nineSymbol + "\n";
    } else {
        let random = symbols[Math.floor(Math.random() * 9)]
        number += i + ":" + random + "\n";
        
    }
}
return number;
}

//function to randomize symbols
/*function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }*/

  
//function to change states (pages to make it simpler for me)
function changeState() {
    if(page === 1) {
        bigText.innerText = "I can read your mind!";
        goButton.innerText = "GO";
        goButton.hidden = false;
        resetButton.hidden = true;
        pageButton.hidden = true;
        smallText.hidden = true;
    } else if (page === 2) {
        bigText.innerText = "Pick a number from 01-99.";
        goButton.hidden = true;
        resetButton.innerText = "RESET";
        resetButton.hidden = false;
        pageButton.innerText = "NEXT";
        pageButton.hidden = false;
        smallText.innerText = "When you have your number, click next.";
        smallText.hidden = false;
    } else if (page === 3) {
        bigText.innerText = "Add both digits together to get a new number.";
        resetButton.innerText = "RESET";
        pageButton.innerText = "NEXT";
        pageButton.hidden = false;
        smallText.innerText = "Ex: 14 is 1+4=5 \n Click next to proceed."
        smallText.hidden = false;
    } else if (page === 4) {
        bigText.innerText = "Subtract your new number from the original number.";
        resetButton.innerText = "RESET";
        pageButton.innerText = "NEXT";
        pageButton.hidden = false;
        smallText.innerText = "Ex: 14-5=9 \n Click next to proceed."
        smallText.hidden = false;
    } else if (page === 5) {
        bigText.innerText = shuffle();
        resetButton.innerText = "RESET";
        pageButton.innerText = "REVEAL";
        pageButton.hidden = false;
        smallText.innerText = "Find your new number. \n Note the symbol beside the number.";
        smallText.hidden = false;
    } else if (page === 6) {
        bigText.innerText = nine;
        goButton.hidden = true;
        resetButton.innerText = "RESET";
        pageButton.hidden = true;
        smallText.innerText = `Your symbol is: \n ${nineSymbol}`;
        smallText.hidden = false;
    }
};
    //if else statements for each page... 
    // hide and show different dom elements...


