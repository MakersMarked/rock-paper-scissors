


function getComputerChoice (x) {
    return Math.floor(Math.random(3) * x)+1
}
const x = getComputerChoice(3)
   if (x===3) {
    alert("Scissors");}
    else if (x===2) {
        alert("Rock");}
   else {
        alert("Paper")}
   

   console.log(x)
