let bigText = document.querySelector(".bigText");
let smallText = document.querySelector(".smallText");
let goButton = document.querySelector(".startButton");
let resetButton = document.querySelector(".resetButton");
let pageButton = document.querySelector(".pageButton");
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
let nineSymbol = symbols[0];
let page = 0;

//function to change page(attach to startButton)
function changePage() {
    page++;
    changeState();//function with page information   
    //goButton & page button both need this function on a click event
}

//function to reset
function reset() {
    page = 0; //go back to the start
    changeState();//function with page information to access page 0;
    //reset button needs this function on a click event
}

//function to randomize symbols
function randomSymbol() {
}

//function to change states (pages to make it simpler for me)
function changeState() {
    //if else statements for each page... 
    // hide and show different dom elements...
}


