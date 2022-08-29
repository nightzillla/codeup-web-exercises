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
// Write a function that accepts an array of numbers and returns it average.
// Bonus: if there are any non-numic values in the array, return false; Numeric strings should count as numeric values.
// function isNumber(value){
//     return !(isNaN(value) || typeof value === "boolean" || value === null)
// }
//
//
// let array = [5, 10, 15];
// let array2 = [-25,-22,258, 68];
// let array3 = ["notANumber", 25, 78];
//
// function arrayAverage(array){
//     let total = 0;
//     array.forEach(number => {total += number});
//     return total/array.length;
// }
//
// function arrayAverage(array){
//     if( array === undefined){
//         return false;
//     }
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (!isNumber(array[i])){
//             return false;
//         }
//         total += array[i];
//     }
//     return total/array.length;
// }
// *********************************************************************************************************************
// Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
// Bonus: if there are any values that are not strings, return false;
// let stringArray = ["Jabba", "Darth Maul", "Hondo", "buzzworthy"];
// function longestString(arrayOfStrings){
//     let longest = '';
//     for (let i =0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length){ //longest = arrayOfStrings[i];
//             longest = arrayOfStrings[i];
//         }
//     }
//     return longest;
// }
// *********************************************************************************************************************
//  Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
// function calculateTotalStudents(s) {
//     let total = 0;
//     for (let i = 0; i < s.length; i++) {
//         total += s[i].students
//     }
//     return total;
// }
// *********************************************************************************************************************
// Write a function that calculates the sum of the elements of an array.
// let numberArray = [8, 10, 20]
// function arraySum(array){
//     let total = 0;
//     for (let i = 0; i <array.length; i++) {
//         total += array[i];
//     }
//     return total;
// }
//
// console.log(arraySum(numberArray));
// *********************************************************************************************************************
// // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// const neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }
//
// const neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }
// function desirableNeighborhood(neighborhoodObject) {
//     let total = 0;
//     for (let i =0; i <neighborhoodObject.schools.length; i++){
//         total += neighborhoodObject.schools[i].rating;
//     }
//     return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && total >= 24;
// }
// *********************************************************************************************************************
// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16
//
// What's the cost of each level? level * level * priceOfCan
// need a totalCost accumulator variable and some kind of level variable that keeps track of what level I'm on
// and I need to keep looping until totalCost > bonus
// function berramid(bouns, price) {
//     let totalCost = 0;
//     let levels = 0;
//     while (totalCost < bouns) {
//         // console.log("Total cost before increment. " + totalCost);
//         // console.log("cost of level " + levels + "is" + levels **2 * price);
//         totalCost += levels * levels * price;
//         if (totalCost + ((levels + 1) **2 * price) > bouns){break;}
//         levels ++;
//     }
//     return levels;
// }
// function beeramid (bonus,price){
//     let total = (bonus - (bonus % price))/price; //this line tells you how many cans of beer you can buy
//     let x = 0; //accumulator variable
//     for (let i = 0; total >= ((1 / 3)*(i**3))+((1 / 2)*(i**2))+((1 / 6)*(i)); i++){ //solved for a cubic function
//         x = i; //match the accumulator to the number of levels
//     }
//     return x;
// }
// *********************************************************************************************************************
// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`
// convertToObject("Intro to Programming", 20) return
// const convertToObject = function (nameOfClass, numberOfStudents) {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents,
//     }
// }
// // const convertToObject = (nameOfClass, numberOfStudents) => {
// //     return {
// //         class: nameOfClass,
// //         numberOfStudents: numberOfStudents
// //     }
// // }
// console.log(convertToObject("Intro to Programming", 20));
//
// let myFunction = convertToObject;
// console.log(myFunction("Intro to React"));
// *********************************************************************************************************************
// Writing functions notes
//  % 2 === 0; means to see if theres any remainder
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
//     let randomNumber = Math.ceil(Math.random() * 100) + 10;
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
// function reverseSign(i) {
//     if (i > 0) {
//         return i * -1;
//     } else {
//         return i * -1;
//     }
// }
// *********************************************************************************************************************
// Function named absoluteValue that takes in a number and returns the absolute value of the provided number
// function absoluteValue(i) {
//     return Math.abs(i);
// }
// *********************************************************************************************************************
// Function named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
// function isMultipleOfThree (i) {
//     if (i % 3 === 0) {
//         return true;
//     }
//     return false;
// }
//*********************************************************************************************************************
// Function named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5
// function isMultipleOfFive(i){
//     if (i % 5 === 0) {
//         return true;
//     }
//     return false;
// }
//*********************************************************************************************************************
// Function named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
// function ifMultipleOfBothThreeAndFive (i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         return true;
//     }
//     return false;
// }
//*********************************************************************************************************************
// Function named square that takes in a number and returns the number times itself.
// function square(i) {
//     return i * i;
// }
//*********************************************************************************************************************
// Function named add that takes in two numbers and returns the sum.
// function add(a,b) {
//     return a + b;
// }
//*********************************************************************************************************************
// Function named cube that's in a number and returns the number times itself, times itself.
// function cube(i) {
//     return i ** 3;
// }
//*********************************************************************************************************************
// Function named squareRoot that takes in a number and returns the square root of the provided number
// function squareRoot(i){
//     return Math.sqrt(i);
// }
//*********************************************************************************************************************
// Function named subtract that takes in two numbers and returns the first minus the second argument.
// function subtract(a,b) {
//     return a - b;
// }
//*********************************************************************************************************************
// Function named multiply that takes in two numbers and returns the first time the second argument.
// function multiply(a, b ) {
//     return a * b;
// }
//*********************************************************************************************************************
// Function named divide that takes in two numbers and returns the first argument divided by the second argument.
// function divide(a, b){
//     return a/ b;
// }
//*********************************************************************************************************************
// Function named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
// function quotient(a, b){
//     return parseInt( a / b);
// }
//*********************************************************************************************************************
// Function remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
// function remainder(a, b) {
//     return a % b;
// }
//*********************************************************************************************************************
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
// function sumOfSquares(a,b){
//     return ((a*a)+(b*b));
// }
// *********************************************************************************************************************
// Write a function named timesTwoPlusThree that takes in a number, multiplies it by two, and 3 and returns the result.
// function timesTwoPlusThree(i) {
//     return i * 2 + 3;
// }
// *********************************************************************************************************************
// Write a function named areaOfRectangle that takes in two numbers and returns the product.
// function areaOfRectangle(a, b) {
//     return a * b;
// }
// *********************************************************************************************************************
// Write a function named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle.
// function areaOfCircle (i) {
//     return Math.PI * Math.pow(i, 2);
// }
// *********************************************************************************************************************
// Function where it returns true if the input is one OR two.
// function isOneOrTwo(x) {
//     return x == 1 || x == 2;
// }
// *********************************************************************************************************************
// Function where the input is one or 3 possibilities.
// function isOneOrTwoOrThree(x) {
//     return x == 1 || x == 2 || x == 3
// }
// *********************************************************************************************************************




// *********************************************************************************************************************