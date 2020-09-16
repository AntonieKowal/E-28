let playRound = document.getElementById("playRound");
let guessList = document.getElementById("guessList");
let guess = document.getElementById("guess");
let guessDetail = document.getElementById("guessDetail");
let resetButton = document.getElementById("resetButton");
let winner = document.getElementById("winner");
let game = document.getElementById("game");
let winnerMessage = document.getElementById("winnerMessage");

let guessCount = 0;
let guesses = []

let target = Math.round(Math.random() * 50);
let direction = "";

playRound.addEventListener("click", () => {

    // check the guesses array to see if the guess has been made yet
    if (guesses.includes(guess.value)) {
        guessDetail.innerHTML = "you have already guessed this number, please guess a new number!";
        guess.value = "";
        return;
    }

    // validate the input to be between 1 and 50, there is no validation for non-numeric values
    if (guess.value < 1 || guess.value > 50) {
        guessDetail.innerHTML = "please guess a number between 1 and 50!";
        guess.value = "";
        return;
    }

    // if not, add it to the array and continue
    guesses.push(guess.value);
    guessCount++;

    // Create a new list item element for the guess and append it to the guessList
    let newGuess = document.createElement("li");
    newGuess.textContent = guess.value;
    guessList.appendChild(newGuess);    

    // assign to the var 'direction' a string to display to the user which direction the next guess should go
    if (guess.value > target) direction = "lower!";
    if (guess.value < target) direction = "higher!";

    // update details for the round that was just played
    if (guessCount > 0) guessDetail.innerHTML = "The correct number is <b>" + direction + "</b> You have made " + guessCount + " guesses.";

    // if the guess is correct, show the div containing reset button + final results
    if (guess.value == target) {
        winner.style.display= "block";
        game.style.display = "none";
        winnerMessage.innerHTML = "You took " + guessCount + " guesses to guess the correct number " + target + "!";
        guessDetail.innerHTML = "";
    }

    // reset the text input element's value
    guess.value = "";
})

// reset the state of the game
resetButton.addEventListener("click", () => {
	target = Math.round(Math.random() * 50);
	direction = "";
	winner.style.display = "none";
	game.style.display = "block";
	guesses = [];
    guessCount = 0;

    // remove all children of the guessList from previous game
    while (guessList.firstChild) {
        guessList.removeChild(guessList.firstChild);
    }
});
