let bigText = document.getElementById('bigText');
let smallText = document.getElementById('smallText')
let goButton = document.getElementById('goButton')
let resetButton = document.getElementById('resetButton')
let pageButton = document.getElementById('pageButton')
let symbols = randomArrayShuffle(["!", "@", "#", "$", "%", "^", "&", "*", "+"]);
let nineSymbol = randomArrayShuffle(symbols[0]);
let page = 1;

//function to change page(attach to startButton)
function changePage() {
    page++;
    changeState();//function with page information   
    //goButton & page button both need this function on a click event
};

function reset() {
page = 1;
changeState();
};

/*
//function to reset
function reset() {
    page = 1; //go back to the start
    changeState();//function with page information to access page 0;
    //reset button needs this function on a click event
}
*/

//function to get numbers


//function to randomize symbols
function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

//function to change states (pages to make it simpler for me)
function changeState() {
    if(page === 1) {
        bigText.innerHTML.display = "I can read your mind!";
        goButton.innerHTML = "Go";
        pageButton.hidden = true;
        smallText.hidden = true;
    } else if (page === 2) {
        bigText.innerHTML = "Pick a number from 01-99.";
        resetButton.innerHTML = "Reset";
        pageButton.innerHTML = "Next";
        smallText.innerHTML = "When you have your number, click next.";
    } else if (page === 3) {
        bigText.innerHTML = "Add both digits together to get a new number.";
        resetButton.innerHTML = "Reset";
        pageButton.innerHTML = "Next";
        smallText.innerHTML = "Ex: 14 is 1+4=5 \n Click next to proceed."
    } else if (page === 4) {
        bigText.innerHTML = "Subtract your new number from the original number.";
        resetButton.innerHTML = "Reset";
        pageButton.innerHTML = "Next";
        smallText.innerHTML = "Ex: 14-5=9 \n Click next to proceed."
    } else if (page === 5) {
        bigText.innerHTML = symbols;
        resetButton.innerHTML = "Reset";
        pageButton.innerHTML = "Reveal";
        smallText.innerHTML = "Find your new number. \n Note the symbol beside the number.";
    } else if (page === 6) {
        //bigText.innerHTML = nineSymbol;
        resetButton.innerHTML = "Reset";
        pageButton.hidden = true;
        smallText.innerHTML = `Your symbol is: \n ${nineSymbol}`;
    }
};
    //if else statements for each page... 
    // hide and show different dom elements...


//start the page function to attach to body as onload
function start() {
    changePage()
    reset()
    changeState()
};
