// while loops:

// let slices = 4;
// while (slices > 0) {
//     console.log("I'll have slice");
//     slices = slices - 1; // slices --; -- short hand
//     console.log(`Now there's${slices} left`);
// }
//     console.log("Now more pizza.");

//***************************************************************************************************************


// let counter = 1; ////                                             let counter = 100;
// while (counter <= 100){ // how long do I continue to decrease     (counter >= 100){
//     console.log(counter);                                //    console.log(counter);
//     counter++; // if you want to decrease                      counter--;
// }

//***************************************************************************************************************

// let number = 5;
// while (number < 200){
//      number *= 2; //<-SHORT VER // longer ver number = number * 2;
//      console.log(number);
// }

//***************************************************************************************************************

// Ask user input -- how much does something cost
// Assign the user input to a variable
// Declare a variable to hold the total cost
// Tell the user what the total is
// Get the user input for the next item's cost
// There needs to be a way for the user to say when there's no more items
// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of the your item."));
// total = total + priceOfItem;
// alert("Your total is now " + total);
// let userInput = "";
// while (userInput !== "stop"){
//     userInput = prompt("Enter the price of your next item.");
//     if (userInput === "stop") {
//         alert("Your fina total is " + total);
//     }else{
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is now " + total);
//     }
// }

//***************************************************************************************************************

// let total = 0;
// let priceOfItem;
// while(true){
//     let userInput = prompt("Enter the price of your item." + "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + "$" + total.toFixed(2)); // .toFixed() set where you want your decimal
//         break;
//     }else{
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + "$" + total.toFixed(2));
//     }
// }

//***************************************************************************************************************
// Do while loops

let number = Math.ceil(Math.random()*6);
let guess;
console.log(guess);
do {
    guess = parseInt(prompt("Enter a number a number between 1 and 6"));
} while (guess !== number);
alert(`Your guess of ${guess} matches the number ${number}!`);

//***************************************************************************************************************

// Create a (while) loop that uses console.log() to creat the output shown below
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// let number = 2;
// while (number <=65536){
//     console.log(number);
//     number *= 2; // number = number * 2
// }
//************************************************************************************************************************
//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// let allCones = Math.floor(Math.random() * 51)+ 50; //< this is to generate 50-100// Math.floor(Math.random() * 50)+ 50;
// // let conesWanted = Math.floor(Math.random() * 5) + 1;
// do{
//     let conesWanted = Math.floor(Math.random() * 5) +1;
//     if (conesWanted > allCones) {
//         console.log(`Cannot sell you ${conesWanted} I only have ${allCones}`);
//     }else{
//         console.log(`${conesWanted} sold...`)
//         allCones = allCones - conesWanted;
//     }
//     console.log(`${allCones} left`);
// } while (allCones > 0);
// console.log("Yay! I sold them all!");

//************************************************************************************************************************
// while loop 0-100
// this is the loop control variable
// initialize it to a starting value
// let count = 100;
// // check the value of the loop control variable in a conditional test
// while(count >= 0){ // conditonal statement
//     console.log(count);
//     // change the value of the loop control variable
//     count = count -1;
//     // initialize, check value, alter its value
// }
for(let count = 100; count >= 0; count = count -1){ //
    console.log(count);
}
// shorthand let count = let i // meaning iterator
for(let i = 100; i >= 0; i--){
    console.log(i);
}
// shorthand let count = let i // meaning iterator
// for(let i = 100; i >= 0; i--){
//     console.log(i);
// }

//while loop increasing to 0 - 100
// let i = 0;
// while (i < 100){
//     // i++; <-- 100 in the loop but you'll show 1-100
//     console.log(i);
//     i++;
// }
// console.log("Outside the loop: " + i);

// for loop compare to while loop let i = 0;
for (i = 0; i < 100; i++){
    console.log(i);
}
console.log("Outside the loop " + i);