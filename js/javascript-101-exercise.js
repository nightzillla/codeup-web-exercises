//Array exercise and functions

// Add the string "tomato" onto the end of the vegetables array.
// *use .push
// vegetables.push('tomato')
//
// assert(
//     vegetables,
//     ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"],
// );
// *********************************************************************************************************************
// Writing functions
// *********************************************************************************************************************
// This function generates a random number that is both POSITIVE and EVEN.
// function randomPositiveEvenNumber() {
//     let randomNumber = Math.ceil(Math.random() * 100) + 10;
//     if (randomNumber % 2 !== 0){
//         return randomPositiveEvenNumber()
//     }
//     return randomNumber;
// }
// *********************************************************************************************************************
// This function generates a random number that is both POSITIVE and ODD.
// function randomPositiveOddNumber() {
//     let randomNumber = Math.ceild(Math.random() * 100) + 10;
//     if (randomNumber % 2 === 0) {
//         return randomPositiveOddNumber()
//     }
//     return randomNumber;
// }
// *********************************************************************************************************************
// This function generates a random number that is both NEGATIVE and EVEN.
// function randomNegativeEvenNumber() {
//     let randomNumber = Math.ceil(Math.random() * -100) -10);
//     if (randomNumber % 2 === 0) {
//         return randomNumber;
//     }
//     return randomNegativeEvenNumber();
// }
// *********************************************************************************************************************
// This function generates a random number that is both NEGATIVE  ODD.
// function randomNegativeOddNumber() {
//     let randomNumber = Math.ceil(Math.random() * -100) - 10;
//     if (randomNumber % 2 === 0) {
//         return randomNegativeOddNumber();
//     }
//     return randomNumber;
// }
// *********************************************************************************************************************
// The next 4 lines create variables that hold these generated random numbers
// let positiveEvenNumber = randomPositiveEvenNumber();
// let positiveOddNumber = randomPositiveOddNumber();
// let negativeEvenNumber = randomNegativeEvenNumber();
// let negativeOddNumber = randomNegativeOddNumber();
// *********************************************************************************************************************
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
// function sayHello(name) {
//     return "Hello, " + name + "!";
// }
// *********************************************************************************************************************
// Function named plusTwo function takes in a variable and adds the number 2 to it.
// function plusTwo(x) {
//     return x + 2;
// }
// *********************************************************************************************************************
// Function named addOne that takes in a number and returns that number plus one.
// function addOne(i) {
//     return i + 1;
// }
// *********************************************************************************************************************
// Function named isPositive that takes in a number and returns true or false if that number is positive.
// function isPositive (i) {
//     if (i > 0) {
//         return true;
//     }
//         return false;
// }
// *********************************************************************************************************************
// Function named isNegative that takes in a number and returns true or false if that number is negative.
// function isNegative (i) {
//     if (i < 0) {
//         return true;
//     }
//     return false;
// }
// *********************************************************************************************************************
// Function named isOdd that takes in a number and returns true or false if that number is odd.
// function isOdd(i) {
//     if (i % 2 !== 0) {
//         return true;
//     }
//     return false;
// }
// *********************************************************************************************************************
// Function named isEven that takes in a number and returns true or false if that number is even.
// function isEven(i) {
//     if (i % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// *********************************************************************************************************************
// Function named identity that takes in any input and returns that input.
// function identity(input) {
//     if (input === input) {
//         return input;
//     }
// }
// *********************************************************************************************************************
// Function named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd.
// function isPositiveOdd(i) {
//     if (i % 2 !== 0 && i > 0) {
//         return true;
//     }
//     return false;
// }
// *********************************************************************************************************************
// Function named isPositiveEven that takes in a number and return true or false if the value is both greater than zero and even
// function isPositiveEven(i) {
//     if (i % 2 === 0 && i > 0) {
//         return true;
//     }
//     return false;
// }
// *********************************************************************************************************************
// Function named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
// function isNegativeOdd(i) {
//     if ( i % 2 !== && i < 0) {
//         return true;
//     }
//     return false;
// }
// *********************************************************************************************************************
// Function named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
// function isNegativeEven(i) {
//     if (i % 2 === 0 && i <  0) {
//         return true;
//     }
//     return false;
// }
// *********************************************************************************************************************
// Function named half that takes in a number and returns half the provided number.
// function half(i) {
//     return i / 2;
// }
// *********************************************************************************************************************
// Function named double that takes in a number and returns double the provided number.
// function double(i) {
//     return i * 2;
// }
// *********************************************************************************************************************
// Function named triple that takes in a number and returns triple the provided number.
// function triple(i) {
//     return i * 3;
// }
// *********************************************************************************************************************
// Function named reverseSign that takes in a number and returns the provided number but with the sign reversed.
function reverseSign(i) {
    if (i > 0) {
        return i * -1;
    } else {
        return i * -1;
    }
}
// *********************************************************************************************************************
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
// function sumOfSquares(a,b){
//     return ((a*a)+(b*b));
// }
// *********************************************************************************************************************
// Write a function definition named remainder that takes in two numbers and returns



// *********************************************************************************************************************