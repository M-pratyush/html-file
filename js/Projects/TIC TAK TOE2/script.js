let boxs=document.querySelectorAll(".cell");
let btn=document.querySelector("#button");
let msgContainer=document.querySelector(".msg-container");
let newGame=document.querySelector("#new-game");
let para=document.querySelector("#msg");

let runO=false;

const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8] 
]

function resetGame() {
    // Reset each cell to empty and enable them for new clicks
    boxs.forEach(cell => {
        cell.textContent = '';  // Clear the cell content
        cell.disabled = false;  // Re-enable the cell to be clickable
    });

    runO = false;  // Reset to player X's turn
    currentPlayer = 'X';  // Optionally reset current player to 'X'
    
    msgContainer.classList.add("hide");  // Hide the winner message
    para.innerText = "";  // Clear the winner message
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
        }
    });
});

const disbtn=()=>{
   for(let bo of boxs){
    bo.disabled=true;
   }
};

const enbbox=()=>{
    for(let bo in boxs){
        bo.disabled=false;
    }
}

const displayWinner=(winner)=>{
    para.innerText=`Congratulation Winner ${winner}`;
    msgContainer.classList.remove("hide");
    disbtn();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let posval1=boxs[pattern[0]].innerText;
        let posval2=boxs[pattern[1]].innerText;
        let posval3=boxs[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1 == posval2 && posval2 == posval3)
            {
                console.log("winner",posval1);
                displayWinner(posval1);
            }
        }
    }
}