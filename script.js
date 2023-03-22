









function getComputerChoice() {
    const choices = Math.floor(Math.random(3) * 3)+1
    if (choices===3) {
        console.log("Scissors")}
    else if (choices===2) {
        console.log("Rock")}
    else {
        console.log("Paper")}
 }
console.log(getComputerChoice())
