let boxs = document.querySelectorAll(".cell");
let btn = document.querySelector("#button");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#new-game");
let para = document.querySelector("#msg");
let runO = false;

const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetGame() {
    boxs.forEach(cell => {
        cell.textContent = '';  // Clear the cell content
        cell.disabled = false;  // Re-enable the cell to be clickable
    });
    runO = false;  // Reset to player X's turn
    msgContainer.classList.add("hide");  // Hide the winner/draw message
    para.innerText = "";  // Clear the message
}

// Event listener for the reset button
newGame.addEventListener('click', resetGame);

// Adding the click event listeners again after reset
boxs.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === '') {
            cell.innerText = runO ? "O" : "X";  // Toggle between X and O
            runO = !runO;  // Change the player's turn
            cell.disabled = true;  // Disable the clicked cell
            checkWinner();  // Check if there's a winner
            checkDraw();  // Check if the game is a draw
        }
    });
});

const disbtn = () => {
    for (let bo of boxs) {
        bo.disabled = true;
    }
};

const enbbox = () => {
    for (let bo of boxs) {
        bo.disabled = false;
    }
};

const displayWinner = (winner) => {
    para.innerText = `Congratulations! Winner: ${winner}`;
    msgContainer.classList.remove("hide");
    disbtn();
};

// Function to check the winner
const checkWinner = () => {
    for (let pattern of winPattern) {
        let posval1 = boxs[pattern[0]].innerText;
        let posval2 = boxs[pattern[1]].innerText;
        let posval3 = boxs[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 == posval2 && posval2 == posval3) {
                console.log("winner", posval1);
                displayWinner(posval1);
                return;  // Stop checking after a winner is found
            }
        }
    }
};

// Function to check for a draw
const checkDraw = () => {
    let isDraw = true;
    boxs.forEach(cell => {
        if (cell.textContent === '') {
            isDraw = false;  // If any cell is empty, it's not a draw
        }
    });

    if (isDraw) {
        displayDraw();  // Call draw display function if all cells are filled and no winner
    }
};

// Function to display draw message
const displayDraw = () => {
    para.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disbtn();  // Disable all cells
};
