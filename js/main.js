const wordList = ["planet", "rocket", "alien", "spaceship", "astronaut", "galaxy", "orbit", "moon", "star"];
let chosenWord = "";
let incorrectGuesses = 0;
const maxAttempts = 6;
let guessedLetters = [];

function displayWord() {
    const wordDisplay = document.getElementById("word-display");
    let display = "";
    for (const letter of chosenWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }
    wordDisplay.textContent = display;
}

function checkWin() {
    if (!document.getElementById("word-display").textContent.includes("_")) {
        alert("Congratulations! You've guessed the word: " + chosenWord);
        location.reload();
    }
}

function checkLoss() {
    if (incorrectGuesses >= maxAttempts) {
        alert("Sorry, you've run out of attempts. The word was: " + chosenWord);
        location.reload();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    displayWord();

    document.getElementById("guess-button").addEventListener("click", () => {
        const guessInput = document.getElementById("guess-input");
        const guess = guessInput.value.toLowerCase();

        if (guessedLetters.includes(guess)) {
            alert("You already guessed that letter.");
        } else if (chosenWord.includes(guess)) {
            guessedLetters.push(guess);
            displayWord();
            checkWin();
        } else {
            incorrectGuesses++;
            document.getElementById("incorrect-count").textContent = incorrectGuesses;
            checkLoss();
        }

        guessInput.value = "";
    });
});
