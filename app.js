const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("main .btn-circle");
const reset = document.getElementById("reset");
const btn1 = document.getElementById("btn-1");
const bnt1Img = document.querySelector("#btn-1 img");
const bnt2Img = document.querySelector("#btn-2 img");
const btn2 = document.getElementById("btn-2");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");
const popup = document.querySelector(".popup-wrapper");

let result = document.querySelector(".status h1");

let userChoice = undefined;
let computerChoice = undefined;

let score = 0;

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    checkWinner();
  });
});

function updateScore(value) {
  score += value;
  document.getElementById("score").innerText = parseInt(score);
}

function checkWinner() {
  document.querySelector("main").style.display = "none";
  document.querySelector(".selection").style.display = "flex";
  computerChoice = pickRandomChoice();
  btn1.classList.add(userChoice);
  btn2.classList.add(computerChoice);
  bnt1Img.src = `images/icon-${userChoice}.svg`;
  bnt2Img.src = `images/icon-${computerChoice}.svg`;
  if (
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper") ||
    (userChoice == "rock" && computerChoice == "scissors")
  ) {
    updateScore(1);
    result.innerText = "YOU WIN";
  } else if (userChoice == computerChoice) {
    result.innerText = "DRAW";
  } else {
    updateScore(-1);
    result.innerText = "YOU LOSE";
  }
  console.log(userChoice, computerChoice);
}

reset.addEventListener("click", () => {
  document.querySelector("main").style.display = "flex";
  document.querySelector(".selection").style.display = "none";
  btn1.classList.remove(userChoice);
  btn2.classList.remove(computerChoice);
});

openBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

updateScore(0);
