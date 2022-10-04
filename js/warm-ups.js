// Write a function that accepts an array of numbers and returns it average.
// Bonus: if there are any non-numic values in the array, return false; Numeric strings should count as numeric values.
//
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
//

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



// const attendance = {
//     miami: 32789,
//     buffalo: 45678,
//     portland: 24567,
// }
// let miami = 32789
// let buffalo = 45678
// let portland = 24567

// for (i = 0, i < miami.length; i++) {
//     console.log(miami);
//     console.log(buffalo);
//     console.log(portland);
// }

// Given the attendance object, write a function that returns the total attendance across all team,
// function totalAttendance(attendanceObject) {
//     let attendanceArray = Object.values(attendanceObject);
//     let total = 0;
//     for (let i = 0; i < attendanceArray.length; i++) {
//         total += attendanceArray[i];
//     }
//     return total;
// }

// function totalAttendance(attendanceObject) {
//     let total = 0;
//     for (const prop in attendance) {
//         total += attendance[prop];
//     }
//     return total;
// }

// for (const prop in attendance) {
//     console.log(attendance[prop]);
// }
    // attendanceArray.forEach(function (attendance){
    //     total += attendance;
    // });
    // }

// Given the attendance object, write a function that returns the average attendance

// function averageAttendance(attendanceObject) {
//     let total = 0;
//     for (const prop in attendance) {
//         total += attendance[prop];
//     }
//     return total/Object.keys(attendance).length;
// }
// Given the attendance object, write a function that returns an object with totalAttendnace and averageAttendance properites set to the correct value.
//
// function createObject(averageAttendance) {
//     let total = 0;
//     for (const prop in attendance) {
//         total += attendance[prop];
//     }
//     return {
//         totalAttendance: total,
//         averageAttendance: total/Object.keys(attendance).length
//     }
// }

// /**
//  * Convert Address to Object
//  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//  *
//  * Examples
//  *
//  * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
//  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
//  **/
//
// let address = '8646 Sunny Oaks'
// function convertAddressToObject (addressString){
//     return {
//         streetNumber: address.substring(0, address.indexOf(' '));
//         streetName: addressString.substring(address.indexOf(' ') + 1)
//     }
//     // address.indexOf(' '); // 4
//     // address.substring(0 , 4); // "8646"
//     // let addressArray = address.split(' ')
// }
// what os substring?
// let address = '8646 Sunny Oaks'
// why is the index of (' ') = 4?
// address.substring(4) = " Sunny Oaks"
// address.substring ( 4 +1) = "Sunny Oaks"
// convert string to object

// /**
//  * Count total pets
//  * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//  *
//  * Examples
//  *
//  * >> totalPets([
//  *       {name: 'Fernando Mendoza', pets: 1},
//  *       {name: 'Douglas Hirsh', pets: 8},
//  *       {name: 'Kenneth Howell', pets: 2}
//  *    ]) ➞ 11
//  */
// when you're trying to find total or average use = let total = 0
// for loops you need to use [i]
// let peopleAndPets = [
//         {name: 'Fernando Mendoza', pets: 1},
//         {name: 'Douglas Hirsh', pets: 8},
//         {name: 'Kenneth Howell', pets: 2}
//         ]
// for loops
// function totalPets(arrayOfObjects) {
//     let total = 0;
//     for ( let i = 0; i < arrayOfObjects.length, i++) {
//         total += arrayOfObjects[i].pets;
//     }
// }
// forEach
// function totalPets(arrayOfObjects) {
//     let total = 0;
//     arrayOfObjects.forEach(function(object) {
//         total += arrayOfObjects.pets;
//     })
//     return total;
// }
// .reduce
// function totalPets(arrayOfObjects) {
//   return arrayOfObjects.reduce(function(acc, currenValue) {
//         return acc + currenValue.pets;
//     }, 0)
// }

// /**
//  * Find the Smallest and Biggest Numbers
//  * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//  *
//  * Examples
//  * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//  * >> minMax([2334454, 5]) ➞ [5, 2334454]
//  * >> minMax([1]) ➞ [1, 1]
//  *
//  * Notes
//  * All test arrays will have at least one element and are valid.
//  */
// let warmUpArray = [1,2,3,4,5]
// function minMax(arrayOfNumbers) {
//     let newArr = [];
//     for (let i = 0; i <arrayOfNumbers.length; i++) {
//         return minMax(warmUpArray);
//     }
// }


// /**
//  * Filter out Strings from an Array
//  * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
//  *
//  * Examples
//  *
//  * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//  * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//  * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
//  *
//  * Notes
//  * Zero is a non-negative integer.
//  * The given array only has integers and strings.
//  * Numbers in the array should not repeat.
//  * The original order must be maintained.
//  */

// * Drink Sorting
// * You will be given an array of drinks, with each drink being an object with two properties: name and price.
// * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// *
// * Assume that the following array of drink objects needs to be sorted:
//     * drinks = [
//     *     {name: "lemonade", price: 50},
// *     {name: "lime", price: 10}
// * ]
// *
// * Examples
// * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

/*======================================= DOM WARMUPS =========================================================*/

// When the usr clicks the button that has the text "change heading", the
// text of the <h1> element changes to read " I pwn the DOM"

// Every time the user enters a character in the input with id "source", that
// character appears in the <p> element with the id "output"
$(function() {
    $('button').on('click', function (){
        $("h1").text("I pwn the DOM");
    });

    $("#source").on('keyup', function(){
        $("#output").text($("#source").val());
    });
});

// When the mouse enters the h2 with the text "Lorem Generator",
// A paragraph containing lorem appears in the div with the id of loremParagraphs
const lorem ="<p>\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi cumque ducimus enim impedit in incidunt labore, magni nemo non placeat porro quae quaerat quam reiciendis saepe similique, velit voluptatem.</p>"
// $('#loremParagraphs').mouseenter(function() {
//     $('h2').text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi cumque ducimus enim impedit in incidunt labore, magni nemo non placeat porro quae quaerat quam reiciendis saepe similique, velit voluptatem.")
// });
$('#loremParagraphs h2').mouseenter(function(){
    $('#loremParagraphs').append(lorem);
});
// When the user clicks on the "Hot Pink It" button, all the text in the div with that id of loremParagraphs becomes hotpink if it's black, or black if it's hotpink
// toggle will make it go back and forth
$('#hotPinkIt').on('click', function() {
    $('#loremParagraphs').toggleClass('hotpink');
});
// When user clicks blinkPink it will set off hotpink
$('#blinkPink').on('click', function() {
    setInterval(function(){
    $('#loremParagraphs').toggleClass('hotpink');
    }, 3000);
});