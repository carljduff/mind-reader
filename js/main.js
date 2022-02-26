let bigText = document.getElementById('bigText');
let smallText = document.getElementById('smallText');
let goButton = document.getElementById('goButton');
let resetButton = document.getElementById('resetButton');
let pageButton = document.getElementById('pageButton');
//let symbols = randomArrayShuffle(["!", "@", "#", "$", "%", "^", "&", "*", "+"]);
//let nineSymbol = randomArrayShuffle(symbols[0]);
//let number = "";
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


//function to change page(attach to goButton & next)
/*
function changePage() {
    page++;
    //function with page information   
    //goButton & page button both need this function on a click event
    //console.log('1');
    
};*/



goButton.addEventListener('click', nextPage);
pageButton.addEventListener('click', nextPage);

//function to reset page
function reset() {
page = 1;
//console.log('2');
//shuffle();
};

resetButton.addEventListener('click', reset);
reset();

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
function changeState() {


  switch (page) {
    case 1:
        //page = 2;
        bigText.innerText = "I can read your mind!";
        goButton.innerText = "GO";
        show(goButton);
        hide(resetButton);
        hide(pageButton);
        hide(smallText);
        break;

    case 2: 
        //page = 3;
        bigText.innerText = "Pick a number from 01-99.";
        hide(goButton);
        resetButton.innerText = "RESET";
        show(resetButton);
        pageButton.innerText = "NEXT";
        show(pageButton)
        smallText.innerText = "When you have your number, click next.";
        show(smallText);
        break;

    case 3:
        //page++;
        bigText.innerText = "Add both digits together to get a new number.";
        resetButton.innerText = "RESET";
        pageButton.innerText = "NEXT";
        show(pageButton);
        smallText.innerText = "Ex: 14 is 1+4=5 \n \n Click next to proceed."
        show(smallText);
        break;

    case 4:
        //page++
        bigText.innerText = "Subtract your new number from the original number.";
        resetButton.innerText = "RESET";
        pageButton.innerText = "NEXT";
        show(pageButton)
        smallText.innerText = "Ex: 14-5=9 \n \n Click next to proceed."
        show(smallText);
        break;

    case 5:
        //page++
        bigText.innerText = shuffle();
        resetButton.innerText = "RESET";
        pageButton.innerText = "REVEAL";
        show(pageButton)
        smallText.innerText = "Find your new number. \n Note the symbol beside the number.";
        show(smallText);
        break;

    case 6:
        //page++
        bigText.innerText = nine;
        hide(goButton);
        resetButton.innerText = "RESET";
        hide(pageButton)
        smallText.innerText = `Your symbol is: \n ${nine}`;
        show(smallText);
        break;

  }
}
changeState();
/*  
//function to change states (pages to make it simpler for me)
function changeState() {
    //console.log('4');
    if(page === 1) {
        bigText.innerText = "I can read your mind!";
        goButton.innerText = "GO";
        show(goButton);
        hide(resetButton);
        hide(pageButton);
        hide(smallText);
    } else if (page === 2) {
        bigText.innerText = "Pick a number from 01-99.";
        hide(goButton);
        resetButton.innerText = "RESET";
        show(resetButton);
        pageButton.innerText = "NEXT";
        show(pageButton)
        smallText.innerText = "When you have your number, click next.";
        show(smallText);
    } else if (page === 3) {
        bigText.innerText = "Add both digits together to get a new number.";
        resetButton.innerText = "RESET";
        pageButton.innerText = "NEXT";
        show(pageButton);
        smallText.innerText = "Ex: 14 is 1+4=5 \n \n Click next to proceed."
        show(smallText);
    } else if (page === 4) {
        bigText.innerText = "Subtract your new number from the original number.";
        resetButton.innerText = "RESET";
        pageButton.innerText = "NEXT";
        show(pageButton)
        smallText.innerText = "Ex: 14-5=9 \n \n Click next to proceed."
        show(smallText);
    } else if (page === 5) {
        bigText.innerText = shuffle();
        resetButton.innerText = "RESET";
        pageButton.innerText = "REVEAL";
        show(pageButton)
        smallText.innerText = "Find your new number. \n Note the symbol beside the number.";
        show(smallText);
    } else if (page === 6) {
        bigText.innerText = nine;
        hide(goButton);
        resetButton.innerText = "RESET";
        hide(pageButton)
        smallText.innerText = `Your symbol is: \n ${nine}`;
        show(smallText);
    }
};
    //if else statements for each page... 
    // hide and show different dom elements...
*/

