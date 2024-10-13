let youScore=0;
let compScore=0;
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');
const drawSound=document.getElementById('draw-sound');
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');
const genCompChoice=()=>{
    const options=['rock','paper','scissor']
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const stopAllSounds = () => {
    winSound.pause();
    winSound.currentTime = 0; // Reset playback position
    loseSound.pause();
    loseSound.currentTime = 0;
    drawSound.pause();
    drawSound.currentTime = 0;
}

//win-sound
function playWinSound() {
    stopAllSounds()
    winSound.play();
}
//lose-sound
function playLossSound(){
    stopAllSounds()
    loseSound.play()
}
//draw-sound
function playDrawSound() {
    stopAllSounds()
    drawSound.play();
}

//draw Game
const drawGame=()=>{
    msg.innerText='Game Draw 😡 Play Again 😀'
    msg.style.backgroundColor='grey'
    playDrawSound()
}
//win-Game or Loss-Game
const showWinner=(userwin,userChoice,compChoice)=>{
     if(userwin){
        youScore++;
        userScorePara.innerText=youScore;
        playWinSound()
        msg.innerText=`You Win!😀 ${userChoice} 😎BEAT😎 ${compChoice}`;
        msg.style.backgroundColor='green'

     }
     else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Loss! ${compChoice} 😥BEAT😥 ${userChoice}`;
        msg.style.backgroundColor='red'
        playLossSound()
     }
}

const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice === compChoice){
        drawGame()
    }
    else{
        let userwin=true;
        if(userChoice === 'rock'){
            userwin= compChoice === 'peper'?false:true;
        }
        else if(userChoice === 'peper'){
            userwin= compChoice === 'scissor'?false:true;
        }
        else{
            userwin=compChoice==='rock' ? false:true;
        }
        showWinner(userwin,userChoice,compChoice)
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id")
        playgame(userChoice)
    })
});