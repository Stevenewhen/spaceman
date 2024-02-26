

const letters = ['a', 'b', 'c', 'd', 'e'];   ////so on. Letters all the way to

const wordList = ['bicycle', 'bus', 'school', 'pencil']; // examples


/////testing

var tryButton = document.getElementById('btn');

tryButton.addEventListener('click', function() {
        console.log(this.textContent);
});
/////////


// const ROCKET_STAGES = {         /////use image sources similar to RPS for each stage)
//     1: {img: 'asset/rocket1.png'}
//     2:
//     3:
//     4:
//     5:
// }

var wordDisplay
var selectedWords
var word
var currentWord = "";
 


init();


function shuffleWords(cb) {
    wordList.sort(() => Math.random() -0.5);
    if (typeof callback === 'function') {
        callback();
    }
}

console.log(wordList)

function getRandomWord() {
    currentWord = wordList[wordList.length - 1];
    let letterArr = currentWord.split('');
    // console.log("individual letter:", letterArr);
    let wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';
    letterArr.forEach(function(letter) {
        let letterEl = document.createElement('div.letter');
        letterEl.textContent = letter;
        wordContainer.appendChild(letterEl);
    })
    console.log(currentWord)
    console.log(letterArr);
}


function init() {
   shuffleWords();
   getRandomWord();
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

// function render() {

// }

