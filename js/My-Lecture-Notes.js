
/*
Important NOTES:
i++ / means increment of 1 example: 1 increment 1 = 2 increment 1 = 3
i-- //decrement of 1
"typeof" tells you what the type of userInput is example: userInput 3 = 'number || userInput "3" = string

//**********************************************************************************************************************
// use this to make sure something is a number
const hack = function(val){
    return (!isNaN(parseFloat(val)));
}
*/

//**********************************************************************************************************************


/*
Function


//Arrow function -- if it only returns something, you don't need a return keyword
if you use more than 1 line you would need to use "return"

example:             const add = (num1, num2) => num1 + num2;
                    ^same as function add(num1, num2){ <--- short hand
                                return num1 + num2


 */
//**********************************************************************************************************************
/*
function calculateCircumference(radius){
    const pi = 3.14159;
    return 2 * pi * radius;
}
calculateCircumference();


//**********************************************************************************************************************

function isGreaterThan(val1,val2) {
    return (val1 > val2);
}
function isLessThan(val1, val2) {
    if (typeof val1 !== "number" || typeof val2 !== "number") {
        return false;
    }else{
        return val1 < val2;
    }
}
function isEqualNumber(val1, val2) {
    if (typeof val1 !== "number" || typeof val2 !== "number") {
        return false;
    }else{
        return val1 === val2;
    }
}
function isNot(val){
    return !(val) && val !== null;
}
function isTrue(value) {
    return value === true;
}
function isFalse(value){
    return value === false;
}
function not(value){
    return !value;
}
function addOne(value){
    value = parseFloat(value);
    return value + 1;
}
function isEven(value){
    value =parseInt(value);
    return value % 2 === 0;
}
function isIdentical(val1, val2){
    return val1 === val2;
}
function isEqual(val1, val2){
    return val1 == val2;
}
function or(val1, val2){
    return val1 || val2;
}
function and(val1,val2){
    return val1 && val2
}
function concat(val1, val2){
    return val1.toString() + val2.toString();
}
function isBoolean(val) {
    return typeof val === "boolean";
    }
function isString(val){
    return typeof val === 'string';
}
function isNotString(value){
    return typeof value !== 'string'
}
function isEmptyString(value){
    return value === "";
}
function isNotANumber(val){
     return typeof val !== "number";
     //return (isNaN(val) || type of value === "boolean" || value === null);
}
function isNegative(value){
    return value < 0;
}
function isPositive(value) {
    return value > 0;
}
function isZero(value){
    return value == 0;
}
function isArray(value){
    return Array.isArray(value);
}
function upperCase(value) {
    if (isString(value)) {
        return value.toUpperCase();
    } else {
        return false;
    }
}
*/
//**********************************************************************************************************************

// ARRAY LECTURE:
// declaring an array literal
// EACH ITEM in an array is called an ELEMENT

// EXAMPLES OF ARRAY

let groceryList = ['bread', 'eggs', 'butter', 'milk']; // Looping Arrays
// for(let i =0; i < groceryList.length; i++) {
//     if (i === groceryList.length - 1) {
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ");
//     }
// }

//----------------------------------------------------------------------------------------------------------------------
// let texasCites = ["San Antonio", "Houston", "Dallas", "El Paso"];
// for(let i = 0; i < texasCites.length; i++){
//     if(i % 2 === 1){
//         console.log(texasCites[i] + " is an odd city.")
//     }else {
//         console.log(texasCites[i]);
//     }
// }
// function outputArray(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// outputArray(texasCites);

//----------------------------------------------------------------------------------------------------------------------
// FOR EACH EXAMPLE:
// forEach loops take an anonymous function
// the function we pass forEach loop has up to three parameters
// The first parameter represents the array elements
// The Second parameter represents the element index
// The Third parameter represents the array itself
// the second and third parameters are optional

let prices = [32.99, 21.99, 6.99, 4.99, 12.99,8.98, 5.99]
// prices.forEach(function(price,index) {
//     console.log("Item number " + index + " cost " + price);
// });

// prices.forEach(prices => {       <---- // arrow function
//     console.log(prices)
// });

groceryList.push("potatoes", "serranos");
console.log(groceryList);

groceryList.pop(); // eliminate the last item
console.log(groceryList);

groceryList.unshift("sliced cheddar"); // unshift will add to the beginning of array
console.log(groceryList);

groceryList.shift();
console.log(groceryList);

let indexOfButter = groceryList.indexOf("butter");
console.log(indexOfButter);

groceryList[indexOfButter] = "peanut butter";
console.log(groceryList);

let bread = groceryList[0];
groceryList[0] = "avocadoes";
console.log(groceryList);

let firstHalfOfGroceryList = groceryList.slice(0,2);
console.log(firstHalfOfGroceryList);
let secondHalfOfGroceryLIst = groceryList.slice(2);
console.log(secondHalfOfGroceryLIst);

firstHalfOfGroceryList.push("butter");

groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryLIst);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);

groceryList.sort();
console.log(groceryList);
console.log(groceryList.reverse());

prices.sort(function(a,b){
    return a-b;
});
console.log(prices);

groceryList[3] = "Blueberries";
console.log(groceryList);
console.log(groceryList.sort());

groceryList.forEach(item, index, array) => {
    array[index] = item.toLowerCase();
})
console.log(groceryList);
