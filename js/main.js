const WORDLIST = ['astronaut', 'comet', 'sun', 'star', 'planet', 'earth', 'jupiter', 'saturn', 'gravity', 'moon'];
const HINTLIST = [
    'A person who travels into outer space.',
    'A bright and icy space object that moves through space.',
    'The giant, hot ball of light in the sky.',
    'A twinkling point of light in the night sky.',
    'A large celestial body that orbits a star like Earth.',
    'The blue and green world we live on.',
    'The largest planet in our solar system.',
    'A gas giant with beautiful rings around it.',
    'The force that keeps things on the ground.',
    'A rocky body that orbits Earth, it shows at night.'
  ];

let wordDisplay = "";
let clickedLetter = "";
let letterArr = [];
let hiddenArr = [];
let visibleArr = [];
let numGuess = 5;

//--*Bonus/test
let currentIndex = 0;
let randomIdx = Math.floor(Math.random() * WORDLIST.length);
let currentWord = WORDLIST[randomIdx];
let currentHint = HINTLIST[randomIdx];
//


const wordContainer = document.getElementById("wordContainer");
let numGuessContainer = document.getElementsByClassName("guess-count")[0];
const result = document.querySelector('.result');
const bonus = document.querySelector('.bonus');
const buttons = document.getElementsByClassName('singleBtn')

//MODAL ELEMENTS
const hintBtn = document.getElementById('hintBtn');
const hintModal = document.getElementById('hintModal');
const confirmHintBtn = document.getElementById('confirmHintBtn');
const cancelHintBtn = document.getElementById('cancelHintBtn');
//



init();

function init() {
    // shuffleWords();
    getRandomWord();
    activateButtons();
    numGuessContainer.innerText = `x${numGuess}`;
    document.getElementById("hint").innerText = `Hint: ${currentHint}`;
    // console.log(currentWord);
    // console.log(currentHint);
}

function handleButton(evt) {
    if (evt.target.tagName !== 'BUTTON' || evt.target.disabled) return;
    const selectedLetter = evt.target.innerText.toLowerCase();

    if (letterArr.includes(selectedLetter)) {
        correctLetter(evt);
        // console.log("Match!");
    } else {
        numGuess = numGuess - 1;
        if (numGuess <= 0) {
        } else {
            evt.target.disabled = true
        }
        updateNumGuess();
    }
    // console.log(hiddenArr);
}


function activateButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleButton);
    }
}

//Get Random Word   *UPDATE* getRandom now shuffles and it keeps HINTLISTidx the same as WORDLISTidx.//
function getRandomWord() {
    randomIdx = Math.floor(Math.random() * WORDLIST.length);
    currentWord = WORDLIST[randomIdx];
    currentHint = HINTLIST[randomIdx];
    letterArr = currentWord.split('');
    hiddenArr = Array(letterArr.length).fill("_");
    wordContainer.innerHTML = '';
    letterArr.forEach(function (letter) {
        const li = document.createElement("li");
        li.textContent = "_";
        wordContainer.appendChild(li);
    });
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
    updateNumGuess();
    checkWinner();
}

//Updates Number of Guess and Loser Indicator
let previousNumGuess = numGuess;

function updateNumGuess() {
    const rocketImg = document.getElementById("rocketimg");

    if (numGuess < previousNumGuess) {
        rocketImg.classList.add('shake');
        setTimeout(() => {
            rocketImg.classList.remove('shake');
        }, 500);
    }

    numGuessContainer.innerText = `x${numGuess}`;

    if (numGuess === 4) {
        rocketImg.src = "docs/assets/rocketship4.png";
        bonus.innerText = `...there goes the right wing`;
    } else if (numGuess === 3) {
        rocketImg.src = "docs/assets/rocketship3.png";
        bonus.innerText = `left wing damaged.`;
    } else if (numGuess === 2) {
        rocketImg.src = "docs/assets/rocketship2.png";
        bonus.innerText = `I can't see!`;
    } else if (numGuess === 1) {
        rocketImg.src = "docs/assets/rocketship1.png";
        bonus.innerText = `Houston, we have a problem!`;
    } else if (numGuess <= 0) {
        rocketImg.src = "docs/assets/rocketship0.png";
        result.innerText = `YOU DIED!`;
        bonus.innerText = `(The word was: ${currentWord})`;
        disableAllButtons();
        showAllLetters();
        showModal("MISSION FAILED!");
    }

    previousNumGuess = numGuess;
}


function showModal(message) {
    const modal = document.getElementById('tryAgainModal');
    const resultText = document.getElementById('modal-result-text');
    resultText.innerText = message;
    modal.style.display = 'block';
}

document.getElementById('tryAgainBtn').addEventListener('click', function() {
    window.location.reload();
});

//Checking Winner : the arrays need to be joined in order to truly === each other.
function checkWinner() {
    if (hiddenArr.join('') === letterArr.join('')) {
        result.innerText = 'WINNER!';
        disableAllButtons();
        showModal("WINNER!");
    }
}

function disableAllButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function showAllLetters() {
    wordContainer.innerHTML = '';
    for (let i = 0; i < currentWord.length; i++) {
        const li = document.createElement('li');
        li.textContent = currentWord[i];
        wordContainer.appendChild(li); // Append the new li element
    }
}

hintBtn.addEventListener('click', function() {
    if (numGuess > 2) {
        hintModal.style.display = 'block';
    } else {
        alert("You don't have enough lives to view hint!");
    }
});

confirmHintBtn.addEventListener('click', function() {
    numGuess -= 2;
    updateNumGuess();
    document.getElementById("hint").style.display = 'block';
    hintModal.style.display = 'none';
    hintBtn.disabled = true;
});

cancelHintBtn.addEventListener('click', function() {
    hintModal.style.display = 'none';
});

document.getElementById("hint").style.display = 'none';
