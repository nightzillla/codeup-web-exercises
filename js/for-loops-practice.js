/* DIFFERENT VARIATION OF FOR LOOPS
    for
    for of
    for in
    while
    do while
    forEach
*/
//**********************************************************************************************************************
/*
1st Initialization     let 1 = 0;
2nd Condition          i < 5;
3rd Final Expression   i ++;
const names = ['john', 'bob', 'mary', 'joe'] // name is an array
for loop
for(let i = 0; i < names.length; i ++) {
    console.log(names[i]); // [i] gives you all the name in the array
    console.log(names[i].length);// [i].length will give you the # of length in the array.
    if(i === 2) break; // it will count john = 0; bob = 1; mary = 2;
}
*/
//**********************************************************************************************************************
/*
// WHILE LOOPS
// A while loop is a basic looping construct that will execute a code block as long as a certain condition is true. For example:
let i = 0;
while ( i < 10) {
    console.log('while loop iteration #' + 1);
    i++
}
*/
//**********************************************************************************************************************
/*
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// function showMultiplicationTable() {
//     let number = prompt("Enter a number");
//     for (let multiplier = 1; multiplier <= 10; multiplier++) {
//         console.log(`${number} x ${multiplier} = ${multiplier * number}`);
//     }
// }

*/
//**********************************************************************************************************************
/*
// Write a function that accepts an array of numbers and returns it average.
// Bonus: if there are any non-numic values in the array, return false; Numeric strings should count as numeric values.

function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null)
}


let array = [5, 10, 15];
let array2 = [-25,-22,258, 68];
let array3 = ["notANumber", 25, 78];

function arrayAverage(array){
    let total = 0;
    array.forEach(number => {total += number});
    return total/array.length;
}

function arrayAverage(array){
    if( array === undefined){
        return false;
    }
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (!isNumber(array[i])){
            return false;
        }
        total += array[i];
    }
    return total/array.length;
}

//**********************************************************************************************************************
// for(let i = 1; i <= 5; i++){
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }
// for(let i = 5; i >= 1; i--){
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }
// for of loop
// for (name of names) {
//     console.log(name);
// }
// for in loop
// const user = {'firstName': 'John', 'lastName': 'Doe'} // This is an object
// for (let key in user) console.log(user[key]);
// while loop
// let i = 0;
// while(i < 10) {
//     i++;
//     // if(i === 5) break; // will count until it hits 4
//      if(i === 5) continue; // continue will skip 5
//     console.log(i);
// }
// do while loop
// let i = 0;
// do {
//     i ++;
//     if (i === 5) continue;
//     console.log(i);
// }
// while (i < 10)

// for each is an high order array function
// const animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];
//
// animals.forEach(animal => {
//     console.log(animal);
// });

// for(let i = 5; i > 0; i --) {
//     console.log('DECREMENTING ' + i);
// }


// const attendance = {
//     miami: 5,
//     buffalo: 6,
//     portland: 7,
// }
//     function totalAttendance(attendanceObject) {
//         let attendanceArray = Object.values(attendanceObject)
//         let total = 0;
//         for (let i = 0; i < attendanceArray.length; i++) {
//             total += attendanceArray;
//         }
//         return total;
//     }
//**********************************************************************************************************************
// 1. Write a function that print numbers from 1 to 10

// function oneToTen(count) {
//     for(let i = 0; i <= 10; i++) {
//         return i % 2 === 0
//     }
//     console.log(i)
//
// }

//**********************************************************************************************************************
// 2. Write a function printArray() prints all elements of 2D array using nested for loops

// let printArrayVar = [[1,2],[3,4],[5,6]];
// function printArray(array) {
//     let newArr = [];
//     for(let i = 0; i < array.length; i++) {
//         for(let j = 0; j < array[i].length; j++) {
//             console.log(array[i][j]);
//         }
//     }
// }

//**********************************************************************************************************************
// 3. Write a function printEven() prints all the even numbers of an array using for loops.

// let val = [13,23,12,45,22,48,66,100]
// function printEven(val) {
//     for (let i = 0; i < val.length; i++) {
//         if (val[i] % 2 === 0) {
//             console.log(val[i])
//         }
//     }
// }

//**********************************************************************************************************************
// 4.
// let arr = [-100, 2, 3, 4, 5, 6, 7, 8, 90, 13, 15, 1]
// function minMax (array) {
//     let min = 0;
//     let max = 0;
//
//
//     for (let i = 0; i < array.length; i++) {
//         if (max == 0) {
//             max = array[i];
//         }
//         if (max < array[i]) {
//             max = array[i];
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (min == 0) {
//             min = array[i];
//         }
//         if (min > array[i]) {
//             min = array[i];
//         }
//     }
//     let newArr = [min, max];
//     console.log(newArr);
// }

// showMultiplicationTable(7);

// taken from - https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// function randomIntFromInterval(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
//
// function createTenRandomEvenOddMessages() {
//     var random, evenOddString;
//     for (var i = 0; i < 10; i += 1) {
//         random = randomIntFromInterval(20, 200);
//         evenOddString = (random % 2 === 0) ? 'even' : 'odd';
//         console.log(random + ' is ' + evenOddString);
//     }
// }

// createTenRandomEvenOddMessages();

// for (var i = 1; i <= 9; i += 1) {
//     console.log(String(i).repeat(i));
// }

// for (var i = 100; i > 0; i -= 5) {
//     console.log(i);
// }
//**********************************************************************************************************************
/*
typeof = data
// - Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)

 */
/*
// - Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)

 */
/*
// -  Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)

 */
/*
// - Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values
 */

//**********************************************************************************************************************

// - Write a function that accepts a string,
// breaks down the string into components,
// and returns an object where each component of the string has become the value of a property
// keywords "breaks down the string into components" make it not into a string.
// property = value                               black rifle coffee
// .split(" ") makes it into an array.           property first word = black
// var pistol = {};    {} = objects
// pistol.brand = "glock"; make = key
// car.model = "Camry";

function returnsObjectOfWords (string) {
    let array = string.split (" ")
    let obj = {}
    for ( let i = 0; i < array.length; i++) {
        let property = "word" + (i+1);
        obj.property = array[i]
    }
    return obj;
}
// object.key = value
// object = glock : key = caliber : value : 9mm
// obj = object : foo = key : bar = value
// const obj = { foo: 'bar', baz: 42 };

//**********************************************************************************************************************
/*
// - Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string
 */
/*
// - Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties
 */
/*
// - -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.

 */
//**********************************************************************************************************************
// Write a function that takes in a string and returns a true or false value, based on whether the string has an uppercase character
// arr = [1 ,2 ,3 ,4, 5] // arr[i] arr[index3] = 4
// arrL = [cat, dogs, bears] // arrL.length = 3 animals arrL[i] indexOf 0 = cat
// charAT(i)
function hasAUppercase (string){
    for (let i = 0; i < string.length; i++) {
        let singleLetter = string.charAt(i)
        if (singleLetter.toUpperCase() === singleLetter) {
            return true;
        }
    } return false;
}

//**********************************************************************************************************************
