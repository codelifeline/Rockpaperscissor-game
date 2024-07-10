const choices = ["rock", "paper", "scissor"];
let score = 0;

function playgame(userChoice) {
  document.getElementById("uc").textContent = "Your choice : " + userChoice;

  const computerChoiceIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[computerChoiceIndex];
  document.getElementById("cc").textContent = "Computer choice : " + computerChoice;

  if (userChoice === computerChoice) {
    document.getElementById("rs").textContent = "Game is Tie!";
    rs.style.color = "blue";
  } else if ((userChoice === 'rock' && computerChoice === 'scissor') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && computerChoice === 'paper')) {
    document.getElementById("rs").textContent = "Congrats,You won the game!";
    rs.style.color = "green";
    score++;
    document.getElementById("score").textContent = "score : " + score;
  } else {
    document.getElementById("rs").textContent = "You lost, Try again!"
    rs.style.color = "red";
  }
}
