

const buttons = document.getElementsByClassName('singleBtn')

var wordDisplay = "";
var clickedLetter = "";
var selectedWords;
let currentWord = "";
var letterArr = [];
var hiddenArr = [];
var visibleArr = [];
let numGuess = 5;

const wordList = ['galaxy', 'comet', 'asteroid', 'star', 'planet', 'universe']; 
const wordContainer = document.getElementById("wordContainer");
let numGuessContainer = document.getElementsByClassName("guess-count");
let result = document.getElementsByClassName('result')[0];


init();

function handleButton(evt) {
    if (evt.target.tagName !== 'BUTTON') return;
    selectedLetter = evt.target.innerText.toLowerCase();

    if (letterArr.includes(selectedLetter)) {
        correctLetter(evt);
        console.log("Match!");
    } else {
        numGuess = numGuess -1;
        console.log("Number of Guess: ", numGuess);
        updateNumGuess();
        }
    }


//the getRandomWord from the last word from current word. Splitting
//into an array putting it in the HTML wordContainer.
function getRandomWord() {
    currentWord = wordList[wordList.length - 1];
    letterArr = currentWord.split('');
    wordContainer.innerHTML = "";
    hiddenArr = Array(letterArr.length).fill("_");
    letterArr.forEach(function (letter) {
        var li = document.createElement("li");
        li.textContent = "_";
        wordContainer.appendChild(li);
    })
    console.log(hiddenArr);
    console.log(letterArr);
    }


// correctLetter using eventHandle
function correctLetter(evt) {
    let clickedLetter = evt.target.innerText.toLowerCase();
    if (letterArr.includes(clickedLetter)) {
        letterArr.forEach(function (letter, i) {
            if (letterArr[i] === clickedLetter) {
                wordContainer.children[i].innerText = clickedLetter;
            }
        })
    }
   }


//Shuffle words
function shuffleWords() {
    wordList.sort(() => Math.random() -0.5);
}

//updates the wordContainer by rejoining the array.
function displayWord() {
    wordContainer.innerHTML = visibleArr.join(" ");
}

function updateNumGuess() {
    numGuessContainer[0].innerText = `Guesses: ${numGuess}/5`;

    if(numGuess === 0) {
        result.innerText = `SPACE-LOSER!`;
    }
}


function init() {
   shuffleWords();
   getRandomWord();

   for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButton);
   }
   console.log(currentWord)
}












// function wrongGuesses( {    //total of wrong guesses  = 5 amount of gueses most likely use if === 5; return "you lose"

// })

// function keyboard( {          ////in html getElementById(most likely buttons)
//                             // using array from letters[]
//                             // //if wrong disable button.
//                             // document.getElementById('btn')
// })


// function playAgain() {
//     init();
// }

// function results(   {

// })


// }

