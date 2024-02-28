
var wordDisplay = "";
var clickedLetter = "";
let currentWord = "";
let letterArr = [];
let hiddenArr = [];
let visibleArr = [];
let numGuess = 5;


const buttons = document.getElementsByClassName('singleBtn')
buttons.disabled = false;
const wordList = ['mars', 'comet', 'sun', 'star', 'planet', 'earth', 'running'];
const wordContainer = document.getElementById("wordContainer");
let numGuessContainer = document.getElementsByClassName("guess-count");
const result = document.querySelector('.result');
const bonus = document.querySelector('.bonus');


init();

function init() {
    shuffleWords();
    getRandomWord();
    activateButtons();

    console.log(currentWord)
}

function handleButton(evt) {
    if (evt.target.tagName !== 'BUTTON' || evt.target.disabled) return;
    selectedLetter = evt.target.innerText.toLowerCase();

    if (letterArr.includes(selectedLetter)) {
        correctLetter(evt);
        console.log("Match!");
    } else {
        numGuess = numGuess - 1;
        if (numGuess <= 0) {
        } else {
            evt.target.disabled = true
        }
        updateNumGuess();
    }
    console.log(hiddenArr);
}


function activateButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleButton);
    }
}


//Shuffle words
function shuffleWords() {
    wordList.sort(() => Math.random() - 0.5);
}

//the getRandomWord from the last word from current word. Splitting
//into an array putting it in the HTML wordContainer.
function getRandomWord() {
    currentWord = wordList[wordList.length - 1];
    letterArr = currentWord.split('');
    // wordContainer.innerHTML = "";
    hiddenArr = Array(letterArr.length).fill("_");
    letterArr.forEach(function (letter) {
        var li = document.createElement("li");
        li.textContent = "_";
        wordContainer.appendChild(li);
    })
    console.log(hiddenArr);
    console.log(letterArr);
}

//Display Word : showing the word on html with a joined array.
function displayWord() {
    wordContainer.innerHTML = visibleArr.join(" ");
    checkWinner();
}

// correctLetter using eventHandle
function correctLetter(evt) {
    let clickedLetter = evt.target.innerText.toLowerCase();


    if (letterArr.includes(clickedLetter)) {
        letterArr.forEach(function (letter, i) {
            if (letterArr[i] === clickedLetter) {
                wordContainer.children[i].innerText = clickedLetter;
                hiddenArr[i] = clickedLetter; //updates hiddenArr with correct Clickedletters.
            }
        })
    }
    checkWinner();
}

//Updates Number of Guess and Loser Indicator
function updateNumGuess() {
    numGuessContainer[0].innerText = `LIVES: x${numGuess}`;
    if (numGuess === 4) {
        document.getElementById("rocketimg").src = "../assets/rocketship4.png";
    }
    if (numGuess === 3) {
        document.getElementById("rocketimg").src = "../assets/rocketship3.png";
    }
    if (numGuess === 2) {
        document.getElementById("rocketimg").src = "../assets/rocketship2.png";
    }
    if (numGuess === 1) {
        document.getElementById("rocketimg").src = "../assets/rocketship1.png";
    }
    if (numGuess === 0) {
        document.getElementById("rocketimg").src = "../assets/rocketship0.png";
        result.innerText = `SPACE-LOSER!`;
        bonus.innerText = `(was)`;
        disableAllButtons();
    }
}

//Checking Winner : the arrays need to be joined in order to truly === each other.
function checkWinner() {
    if (hiddenArr.join('') === letterArr.join('')) {
        result.innerText = 'WINNER!';
        disableAllButtons();
        // console.log("WOOOOHH!!!");
    }
}

function disableAllButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}





//playAgain()
//reset()

//fill array in with "_" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
