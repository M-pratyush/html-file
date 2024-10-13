const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const resetBtn = document.getElementById('reset');

const gameChoices = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
        const winner = getWinner(userChoice, computerChoice);
        result.textContent = `You chose ${userChoice.toUpperCase()}, Computer chose ${computerChoice.toUpperCase()}. ${winner}`;
        result.style.opacity = 1;
    });
});

resetBtn.addEventListener('click', () => {
    result.textContent = '';
    result.style.opacity = 0;
});

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a draw!";
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
