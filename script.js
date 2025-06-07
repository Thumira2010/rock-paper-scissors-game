const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.querySelectorAll(".choice");
const playerChoiceText = document.getElementById("player_choice");
const computerChoiceText = document.getElementById("computer_choice");
const winnerText = document.getElementById("winner");
const playAgainBtn = document.getElementById("play_again_btn");
const choicesSection = document.getElementById("choices_section");

choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerChoiceText.textContent = `You chose: ${playerChoice}`;
    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

    let result = "";
    if (playerChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      result = "You win!";
    } else {
      result = "You lose!";
    }

    winnerText.classList.remove("show");
    void winnerText.offsetWidth;
    winnerText.textContent = result;
    winnerText.classList.add("show");

    choicesSection.style.display = "none";
    playAgainBtn.style.display = "inline-block";
  });
});

playAgainBtn.addEventListener("click", () => {
  playerChoiceText.textContent = "";
  computerChoiceText.textContent = "";
  winnerText.textContent = "";
  winnerText.classList.remove("show");
  choicesSection.style.display = "flex";
  playAgainBtn.style.display = "none";
});
