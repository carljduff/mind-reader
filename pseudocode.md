
## Things to Remember
<hr>

* Single Page App
* The __Restart__ button will replace the go button on Pages 2-6.
* The pageButton appears on Pages 2-4 as "Next", then is replaced with "Reveal" on Page 5.
* There are two different text sizes.
* On Pages 2-4, only the text needs to change. 
* The text on Page 5 must be scrollable.

## States

<hr>

1. Page 1
* bigText: "I can read your mind"
* goButton: "Go"
* Items needed but Hidden: pageButton with text as "Next" and smallText

2. Page 2 
* Unhide pageButton with text as "Next" and smallText
* restartButton: "Restart"
* bigText: "Pick a number from 01-99"
* smallText: "when you have your number click next"


3. Page 3
* bigText: "Add both digits together to get a new number"
* pageButton: "Next"
* smallText: Line 1: "Ex: 14 is 1+4=5" .... Line 2: "click next to proceed"
* restartButton: "Restart"

4. Page 4
* bigText: "Subtract your new number from the original number"
* pageButton: "Next"
* smallText: Line 1: "Ex: 14-5 = 9" .... Line 2: "click next to proceed"
* restartButton: "Restart"

5. Page 5
* bigText: 0-99 + each corresponding number will have a symbol. Multiples of 9 will receive the same symbol. Must be scrollable.
* pageButton: "Reveal" 
* smallText: Line 1: "Find your new number." .... Line 2: "Note the symbol beside the number."
* restartButton: "Restart

6. Page 6
* Hide reveal button.
* bigText: symbol that's on every multiple of 9.
* smallText: Line 1: "Your symbol is:" .... Line 2: *symbol*
* restartButton: "Restart"

<hr>

## Objects

<hr> 

1. Pages
* Pages 1-6 representing each state. ()
* Contains the main content: buttons and text.

2. Buttons
* This is what will change the states. 
* The __Go__ button is only on Page 1. It will move the user from Page 1 to Page 2.
* The __Page__ button with a text of "Next" will shift the user from Pages 3-5. On Page 5, change the text to "Reveal".
* The __Restart__ button will always take the user back to Page 1.


<hr>

## Output 

<hr>

1. A numbered list from 0-99 (for loop) and random symbols.
* Symbols will be random each time. (Array of symbols with Math.random())
* The symbol will be the same for all multiples of 9. (if % 9 === 0, must select a single symbol from the symbols array.)
* The symbol for multiples of 9 must change after you start over. (Randomize symbols)

## Functions

1. changePage(): switch through pages 
2. reset(): reset page back to page 1.
3. shuffle(): to shuffle through symbol array
4. changeState(): function with info for pages

















