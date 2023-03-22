function getComputerChoice() {
    const choices = Math.floor(Math.random() * 3)+1
    if (choices===3) {
        return "Scissors"}
    else if (choices===2) {
        return "Rock"}
    else {
        return "Paper"}
 }



function playRound (playerSelection, computerSelection) {
    if (playerSelection===computerSelection) {
        return `It's a tie! You both chose ${playerSelection}` 
    }
    else if ((playerSelection === "Paper" && computerSelection === "Rock")||
        playerSelection === "Scissors" && computerSelection === "Paper"||
        playerSelection === "Rock" && computerSelection === "Scissors"){
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }   
}
const playerSelection = "Paper";
const computerSelection = getComputerChoice()



console.log(playRound(playerSelection,computerSelection))