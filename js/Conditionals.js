// "use strict";
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so

 // let name = prompt ("Welcome to Codeup! What is your favorite color?");
 // name = name.toLowerCase();
   function analyzeColor(color) {
       if (color === "red") {
           return "Roses are Red"
       } else if (color === "blue") {
           return "The sky is blue"
       } else (color === "yellow")
       {
           return "Flowers are yellow!"
           console.log(color);
       }
   }
   analyzeColor();

//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
//   - `colors`: a list of the colors of the rainbow
//  - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)

  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//    console.log(analyzeColor(randomColor));

// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */

// switch (colors) {
//     case("red"):
//         alert("We have that color in our catalog!");
//         break;
//     case("blue"):
//         alert("We have that color in our catalog!");
//         break;
//     default:
//         alert("We do not have that color. Sorry!");
//         break;
// }

// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//

// function analyzeColor(colors){
// switch (colors) {
//     case("red"):
//         alert("We have that color in our catalog!");
//         break;
//     case("blue"):
//         alert("We have that color in our catalog!");
//         break;
//     default:
//         alert("We do not have that color. Sorry!");
// }}
//  analyzeColor(prompt("Choose a color!"));

// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 0) {
//         return totalAmount;
//     } else if (luckyNumber === 1) {
//         return totalAmount * (1 - .1);
//     } else if (luckyNumber === 2) {
//         return totalAmount * (1 - .25);
//     } else if (luckyNumber === 3) {
//         return totalAmount * (1 - .35);
//     } else if (luckyNumber === 4) {
//         return totalAmount * (1 - .50);
//     } else (luckyNumber === 5);
//     return totalAmount * (0);
// }

// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random()*6);

// let beforeDiscount = prompt("This is your bill");
// let luckyNumber = Math.floor(Math.random() * 6);
// let totalPriceWithDiscount = (calculateTotal(luckyNumber, beforeDiscount));
// alert("This is your lucky number " + luckyNumber + " your bill before discount " + beforeDiscount + " Your total bill with discount! " +totalPriceWithDiscount);

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */

// let userPrompt = (prompt("Enter a number")); // use let to define prompt

function isEvenOrOdd(val) {
    if (val % 2 === 0) {
        alert("This is Even!")
    } else {
        alert("This is Odd!")
    }
}
    function addHundred(val) {
        alert(`${val} plus 100 = ${(parseFloat(val) + 100)}`);

    }

    function isNegOrPos(val) {
        if (val > 0) {
            alert("It's Positive!");
        } else {
            alert("It's Negative!")
        }
    }
    function isNum(number){
    return !(isNaN(number)) || typeof value === "boolean"}

    function userWantsNum(input) {
        input = confirm("Would you like to enter a number?");
        if (input) { // user input "Ok" // if user input okay prompt display enter a number.
            let userInput = prompt("What number would you like to enter?");
            if (parseFloat(typeof (userInput)) === "number" && x !== NaN) {
                isNum(userInput);
                isEvenOrOdd(userInput);
                addHundred(userInput);
                isNegOrPos(userInput);
            } else {
                alert("I guess you don't want to Enter a number.");
            }
        }
    }
    userWantsNum();

// function getNumber(){
//     if (confirm("Do you want to enter a number?")){
//         return parseFloat(prompt("Enter a number"));
//     }
// }
// function isNumber(value){
//     return !(isNan(value)) || typeof value === "boolean";
// }
// function oddOrEven(number){
//     return number % 2 === 0 ? number + " is even." : number + "is odd.";
// }
// function numberPlus100(number){
//     return number + " plus 100 equals " + (number + 100);
// }
// function negativeOrPositive(number){
//     return number <0 ? number + "is a negative number. ": number + "is a positive number";
//
// }
// function analyzeNumber(number){
//     if (number === undefined){
//         return false;
//     }
//     if (isNumber(number)) {
//         alert(oddOrEven(number));
//         alert(numberPlus100(number));
//         alert(negativeOrPositive(number));
//     }else{
//         alert("Incorrect input data type")
//     }
// }
//
// analyzeNumber(getNumber());
// let wantsToEnterNumber = confirm("Do you want to enter a number?");
// if (wantsToEnterNumber){
//     let userNumber = parseFloat(prompt("Enter a number"));
//     if (isNumber(userNumber)) {
//         alert(oddOrEven(userNumber));
//         alert(numberPlus100(userNumber));
//         alert(negativeOrPositive(userNumber));
//     }else{
//         alert("Incorrect input data type")
//     }
// }
//

// let wantsToEnterNumber = confirm("Do you want to enter a number?");
// if (wantsToEnterNumber){
//      let userNumber = parseFloat(prompt("Enter a number"));
//      if (userNumber % 2 ===0) {
//         alert(userNumber + "is even");
//      }else{
//         alert(userNumber + "it's odd");
//      }
//      alert(userNumber + " plus 100 equals " + (userNumber + 100));
//      if (userNumber < 0) {
//          alert("That is a negative number";
//      }else{
//          alert("That is a positive number");
//      }
// }
//
// How to push?
//     git add -A
// git commit -m "Commit message"
// git push origin main