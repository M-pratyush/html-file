const cells = document.querySelectorAll('[data-cell]');
const restartBtn = document.getElementById('restart-btn');
const newGameBtn = document.getElementById('newgame-btn');
const winSound = document.getElementById('win-sound');
const placeSound = document.getElementById('place-sound');
const timer = document.getElementById('timer');

let isCircleTurn = false;
let timeLeft = 10; // 10-second timer

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6]             // Diagonal
];

const startTimer = () => {
  timeLeft = 10; // Reset timer to 10 seconds for every turn
  const timerInterval = setInterval(() => {
    timeLeft--;
    timer.innerText = `Time Left: ${timeLeft}`;
    if (timeLeft === 0 || checkWin('X') || checkWin('O') || isDraw()) {
      clearInterval(timerInterval);
      if (timeLeft === 0) alert('Time out!');
      resetBoard();
    }
  }, 1000);
};

const handleClick = (e) => {
  const cell = e.target;
  const currentClass = isCircleTurn ? 'O' : 'X';
  if (cell.innerText !== '') return; // Prevent marking a filled cell
  placeMark(cell, currentClass); // Place the mark

  // Check for win or draw
  if (checkWin(currentClass)) {
    winSound.play();
    setTimeout(() => alert(`${currentClass} wins!`), 100);
    resetBoard();
  } else if (isDraw()) {
    alert('Draw!');
    resetBoard();
  } else {
    swapTurns(); // Swap turns only after checking win/draw
    startTimer(); // Start timer for the next player's turn
  }
};

const placeMark = (cell, currentClass) => {
  cell.innerText = currentClass;
  cell.classList.add('marked');
};

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;
};

const checkWin = (currentClass) => {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].innerText === currentClass;
    });
  });
};

const isDraw = () => {
  return [...cells].every(cell => {
    return cell.innerText === 'X' || cell.innerText === 'O';
  });
};

const resetBoard = () => {
  cells.forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('marked');
  });
  isCircleTurn = false;
  timer.innerText = '';
};

restartBtn.addEventListener('click', resetBoard);
newGameBtn.addEventListener('click', () => {
  resetBoard();
  location.reload();
});

cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: false });
});
