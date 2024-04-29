// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let guesses = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }
  
  guesses++;
  
  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${guesses} guesses!`;
    disableInput();
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
}

function disableInput() {
  document.getElementById('guessInput').disabled = true;
}

function resetGame() {
  window.location.reload();
}
