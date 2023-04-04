let playerScore = 0;
let computerScore = 0;
let sameChoice = 0;
let playerRock = 'rock';
let playerPaper = 'paper';
let playerScissors = 'scissors'
let computerRock = 'rock';
let computerPaper = 'paper';
let computerScissors = 'scissors';
let playerSelection;
let computerSelection;
let gameScore = `Computer: ${computerScore} | Player: ${playerScore} | Ties: ${sameChoice}`
const roundResult = playRound();


function getComputerChoice() {
    const choices = Math.floor(Math.random() * 3)+1
    if (choices===3) {
        const cpuScissorsButton = document.querySelector('#cpuScissorsButton');
        cpuScissorsButton.classList.add('clicked');
        setTimeout(function() {
            cpuScissorsButton.classList.remove('clicked');
        }, 500);
        
        return computerScissors}
    else if (choices===2) {
        const cpuRockButton = document.querySelector('#cpuRockButton');
        cpuRockButton.classList.add('clicked');
        setTimeout(function() {
            cpuRockButton.classList.remove('clicked');
        }, 500);
        return computerRock}
    else {
        const cpuPaperButton = document.querySelector('#cpuPaperButton');
        cpuPaperButton.classList.add('clicked');
        setTimeout(function() {
            cpuPaperButton.classList.remove('clicked');
        }, 500);
        return computerPaper}
 }
 function playerChoice () {
    const rockButton = document.querySelector('#rockButton');
    rockButton.addEventListener('click', () => {
        rockButton.classList.add('clicked');
        setTimeout(function() {
            rockButton.classList.remove('clicked');
        }, 500 );
        playerSelection = playerRock
         playRound()});
    const paperButton = document.querySelector('#paperButton')
        paperButton.addEventListener('click', () => {
            paperButton.classList.add('clicked');
        setTimeout(function() {
            paperButton.classList.remove('clicked');
        }, 500 );
        playerSelection = playerPaper;
        playRound()});
    const scissorsButton = document.querySelector('#scissorsButton')
        scissorsButton.addEventListener('click', () => {
            scissorsButton.classList.add('clicked');
        setTimeout(function() {
            scissorsButton.classList.remove('clicked');
        }, 500 );
        playerSelection = playerScissors;
        playRound()});
 } 

 playerChoice();
 

 
function playRound () {
    const computerSelection = getComputerChoice();
    if (playerSelection===computerSelection) { 
        sameChoice++;
        return resultText.textContent = `It's a tie! You both chose ${playerSelection}.`
    }
    else if ((playerSelection == playerPaper && computerSelection == computerRock)||
        playerSelection == playerScissors && computerSelection == computerPaper||
        playerSelection == playerRock && computerSelection == computerScissors){
        playerScore++;
        return resultText.textContent = `You win! ${playerSelection} beats ${computerSelection}.`       
    }
    else if (playerSelection == playerPaper && computerSelection == computerScissors ||
        playerSelection == playerRock && computerSelection == computerPaper ||
        playerSelection == playerScissors && computerSelection == computerRock) {
           computerScore++;
        return resultText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`     
    } 
}  



const containerBox = document.querySelector('.containerBox');
const resultText = document.querySelector('.resultText')
const score = document.querySelector('.score')
score.textContent = gameScore





