

const letters = ['a', 'b', 'c', 'd', 'e'];   ////so on. Letters all the way to

const wordList = ['bicycle', 'bus', 'school', 'pencil']; // examples


/////testing button
// var aBtn = document.getElementById('btn');

// aBtn.addEventListener('click', function() {
//         console.log(this.innerText);
// });
/////////displays all buttons. >_< need each button to have an id/class

var buttons = document.getElementsByClassName('sigleBtn')
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            console.log(this.innerText);
        });
    }



// const ROCKET_STAGES = {         /////use image sources similar to RPS for each stage)
//     1: {img: 'asset/rocket1.png'}
//     2:
//     3:
//     4:
//     5:
// }

var winner;
var wordDisplay
var selectedWords
var word
let currentWord = "";
let letterArr = [];
let hiddenArr = [];

 


init();


function shuffleWords(cb) {
    wordList.sort(() => Math.random() -0.5);
    if (typeof callback === 'function') {
        callback();
    }
}

function getRandomWord() {
    currentWord = wordList[wordList.length - 1];
    let letterArr = currentWord.split('');
    // console.log("individual letter:", letterArr);//
    hiddenArr = Array(letterArr.length).fill("_");
    // console.log("invsible word", hiddenArr);
    let wordContainer = document.getElementById("wordContainer");
    wordContainer.textContent = hiddenArr.join(" ");
    // console.log(currentWord);
}


function correctLetter() {

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

