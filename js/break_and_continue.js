// let string = "";
// for (let i =0; i < 8; i++){
//     let word = prompt("Let's make a sentence! Enter a word: ");
//     if ( word === "curses"){
//         console.log("That word is not allowed")
//         continue;
//     }
//     string += " " + word;
//     console.log("Your sentence is: " + string);
//     //
    // prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
    //     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// prompt("Please a odd number from 1 to 50")
// let odd = (i % 2 === 1);
// for (let i = 1; i <= 50 && i %2 === 1; i+= 2) {
//     console.log("These are odd" + i);
// }

// need the console store userInput
// make a way to log every odd number between 0 -50
// need to have message Yikes! Skipping number userNumber
// system to check to see if its odd, between 0 - 50

// let userInput = prompt("Please a odd number from 1 to 50")
// for (let i = 1; i <= 50; i += 2) {
//     console.log("Here is a odd number " + i);
// if( userInput % 2 === 1 && userInput <= 50 && userInput > 0) {
//     console.log(`Number to skip is ${userInput}`){
//     }
// } else}
     // userInput = prompt("you enter a invalid input."
// while(true) makes a infinite loop
//************************************************************************************************************************
function isNumber(value){
    return !(isNaN(value)) || typeof value === "boolean"
}
// let oddNumber be declare outside
let oddNumber;
while(true) { // to use for loop for(;;){
    oddNumber = prompt("Please enter an odd number.")
    if (oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1 && isNumber(oddNumber)) {
        break;
    }
}
console.log("Number to skip is: " + oddNumber);
console.log(" ");
for(let i = 1; i < 51; i += 2) {
    if (i == oddNumber) {
        console.log("Yikes! Skipping number " + oddNumber)
        continue;
    } else {
        console.log("Here is an odd number; " + i);
    }
}
// console.log(oddNumber);



