// Get DOM elements
// let container = document.querySelector(".container");
let player1 = document.querySelector(".player1");
let button1 = document.getElementById("button1");
let player2 = document.querySelector(".player2");
let button2 = document.getElementById("button2");
let images = document.querySelectorAll("img");

let randomFirstImg;

//before start the game first  diceimage randomy show the display
let randomNum = Math.floor(Math.random() * images.length);
randomFirstImg = images[randomNum];
randomFirstImg.style.display = "block";

//randomly start player logic
let randomRoll = Math.floor(Math.random() * 2);
let rollButtons = document.getElementsByClassName("rollButton");

console.log(randomRoll);

if (randomRoll === 0) {
  rollButtons[0].disabled = true; // Disable the first button (button1)
  button1.style.backgroundColor = "grey";
  play.innerText = "Player2- to play";
} else {
  rollButtons[1].disabled = true; // Disable the second button (button2)
  button2.style.backgroundColor = "grey";
  play.innerText = "Player1- to play";
}

// Initialize player scores
let result1 = 0;
let result2 = 0;

// Player 1's turn
// Event listener for Player 1's button
button1.addEventListener("click", pickRandomImage1);

function pickRandomImage1() {
  // this  condition to check player score
  if (result1 >= 30 || result2 >= 30) {
    announceWinner();
  }

  let randomNum = Math.floor(Math.random() * images.length);

  // Hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // Show a random image
  let selectedImages = images[randomNum];
  selectedImages.style.display = "block";

  // Update Player 1's score
  let imageValue = selectedImages.getAttribute("data-value");
  result1 = result1 + parseInt(imageValue);
  let score1 = document.getElementById("score1");
  score1.innerHTML = `${result1}`;
  player1.appendChild(score1);

  // Disable Player 1's button and enable Player 2's button
  button1.disabled = true;

  let play = document.getElementById("play");
  if (button1.disabled == true) {
    button1.style.backgroundColor = "grey";
    play.innerText = "Player2- to play";
    button2.style.backgroundColor = "green";
  }

  button2.disabled = false;

  // this  condition to check player score
  if (result1 >= 30 || result2 >= 30) {
    announceWinner();
  }
}

// Player 2's turn
// Event listener for Player 2's button
button2.addEventListener("click", pickRandomImage2);

function pickRandomImage2() {
  // this  condition to check player score
  if (result1 >= 30 || result2 >= 30) {
    announceWinner();
  }

  let randomNum = Math.floor(Math.random() * images.length);

  // Hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // Show a random image
  let selectedImages = images[randomNum];
  selectedImages.style.display = "block";

  // Update Player 2's score
  let imageValue = selectedImages.getAttribute("data-value");
  result2 = result2 + parseInt(imageValue);
  let score2 = document.getElementById("score2");
  score2.innerHTML = `${result2}`;
  player2.appendChild(score2);

  // Disable Player 2's button and enable Player 1's button

  button2.disabled = true;
  if (button2.disabled == true) {
    button2.style.backgroundColor = "grey";
    play.innerText = "Player1- to play";
    button1.style.backgroundColor = "green";
  }
  button1.disabled = false;
  // this  condition to check player score
  if (result1 >= 30 || result2 >= 30) {
    announceWinner();
  }
}

// Function to announce the winner
let winnerResult = document.getElementById("winnerResult");

function announceWinner() {
  if (result1 >= 30) {
    winnerResult.innerText = "Player1 Win";
    button2.disabled = true;
    button1.disabled = true;
    reset.disabled = false;
    button1.style.backgroundColor = "grey";
    button2.style.backgroundColor = "grey";
    reset.style.backgroundColor = "lightcoral";
  } else {
    winnerResult.innerHTML = "Player2 Win";
    button2.disabled = true;
    button1.disabled = true;
    reset.disabled = false;
    button1.style.backgroundColor = "grey";
    button2.style.backgroundColor = "grey";
    reset.style.backgroundColor = "lightcoral";
  }
}

// Reset button
let reset = document.getElementById("reset");
reset.disabled = true;
reset.style.backgroundColor = "pink";

// Listen for a "click" event on the reset button
reset.addEventListener("click", resetScore);

function resetScore() {
  score1.innerText = "0";
  score2.innerText = "0";
  result1 = 0; // Reset the score variables
  result2 = 0;
  button1.disabled = false; // Enable both buttons again
  button2.disabled = false;
  reset.disabled = true;
  button1.style.backgroundColor = "green";
  button2.style.backgroundColor = "green";
  winnerResult.innerText = " ";
  reset.style.backgroundColor = "pink";

  //when reset than random player to start the game
  let randomRoll = Math.floor(Math.random() * 2);
  let rollButtons = document.getElementsByClassName("rollButton");

  if (randomRoll === 0) {
    rollButtons[0].disabled = true; // Disable the first button (button1)
    button1.style.backgroundColor = "grey";
    play.innerText = "Player2- to play";
  } else {
    rollButtons[1].disabled = true; // Disable the second button (button2)
    button2.style.backgroundColor = "grey";
    play.innerText = "Player1- to play";
  }
}
