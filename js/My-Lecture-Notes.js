
/*
Important NOTES:
i++ / means increment of 1 example: 1 increment 1 = 2 increment 1 = 3
i-- //decrement of 1
"typeof" tells you what the type of userInput is example: userInput 3 = 'number || userInput "3" = string
Math.max(23, 56, 89) picks the highest number
Math.min(16, 12) picks the smallest number

 */
//**********************************************************************************************************************
// use this to make sure something is a number
const hack = function(val){
    return (!isNaN(parseFloat(val)));
}

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

function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}
function isGreaterThan(val1,val2) {
    return (val1 > val2);
}
function isGreaterThan(arg1, arg2){
    if(typeof arg1 !== "number" || typeof arg2 !== "number"){
        return false;
    } else if (arg2 > arg1 || arg1 === arg2){
        return false;
    } else {return true;}
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
function isNot(boolean){
    if(boolean === null){
        return false;
    }
    return !boolean;
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
function isTypeMatch(val1, val2){
    return (typeof val1 === typeof val2);
}
function isTypeMatch(arg1, arg2){
    if(typeof arg1 === typeof arg2){
        return true;
    } else if (arg1 === null || arg2 === null){
        return false;
    } else {
        return false;
    }
}
function isBoolean(value){
   return typeof value === "boolean":
}
function calcAbs(number){
    if (typeof number !== "number" || number === null){
        return 0;
    }
    return Math.abs(number);
}
function calcCube(val) {
    if (!isNaN(val) || typeof val === "number"){
        return val ** 3;
    } else {
    return 0;}
}
function findLongestString(val1,val2) {
    let val1P = typeof val1 === "string";
    let val2P = typeof val2 === "string";

    if (!val1P && val2P) {
        return val2;
    } else if (!val2P && val1P) {
        return val1;
    } else if (!val1P && !val2P){
        return "";
    } else {
        val1.toString();
        val2.toString();
        if (val1.length > val2.length){
            return val1;
        } else {
            return val2;
        }
    }
}
function isFactor(x,y) {
    let xP = typeof x === "number" && x !== NaN && x !== 0
    let yP = typeof y === "number" && y !== NaN && y !== 0
    if (!xP || !yP ){
        return false;
    }else if (x % y === x){
        return true;
    } else {
        return false;
    }
}
function isFactor (number1, number2){
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        return false;
    } else if (number2 % number1 === 0){
        return true;
    } else {
        return false;
    }
}
function multiply(value1,value2) {
    if (isANumber(parseFloat(value1)) || isNaN(parseFloat(value2))) {
        return false;
    } else {
        return parseFloat(value1) * parseFloat(value2);
    }
}
 */

//**********************************************************************************************************************


// ARRAY LECTURE:
// declaring an array literal
// EACH ITEM in an array is called an ELEMENT
// .push will add it to the end of the array
// .unshift will add it to the beginning of the array
// .shift will remove the first part of the array
// .pop roves the last element from an array
// .indexOf() will find the index of userInput
// .reverse will reverse the order
// EXAMPLES OF ARRAY

// let groceryList = ['bread', 'eggs', 'butter', 'milk']; // Looping Arrays
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

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99,8.98, 5.99]
// prices.forEach(function(price,index) {
//     console.log("Item number " + index + " cost " + price);
// });

// prices.forEach(prices => {       <---- // arrow function
//     console.log(prices)
// });
//
// groceryList.push("potatoes", "serranos");
// console.log(groceryList);
//
// groceryList.pop(); // eliminate the last item
// console.log(groceryList);
//
// groceryList.unshift("sliced cheddar"); // unshift will add to the beginning of array
// console.log(groceryList);
//
// groceryList.shift();
// console.log(groceryList);
//
// let indexOfButter = groceryList.indexOf("butter");
// console.log(indexOfButter);
//
// groceryList[indexOfButter] = "peanut butter";
// console.log(groceryList);
//
// let bread = groceryList[0];
// groceryList[0] = "avocadoes";
// console.log(groceryList);
//
// let firstHalfOfGroceryList = groceryList.slice(0,2);
// console.log(firstHalfOfGroceryList);
// let secondHalfOfGroceryLIst = groceryList.slice(2);
// console.log(secondHalfOfGroceryLIst);
//
// firstHalfOfGroceryList.push("butter");
//
// groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryLIst);
// console.log(groceryList);
//
// groceryList.reverse();
// console.log(groceryList);
//
// groceryList.sort();
// console.log(groceryList);
// console.log(groceryList.reverse());
//
// prices.sort(function(a,b){
//     return a-b;
// });
// console.log(prices);
//
// groceryList[3] = "Blueberries";
// console.log(groceryList);
// console.log(groceryList.sort());
//
// groceryList.forEach((item, index, array) => {
//     array[index] = item.toLowerCase();
// })
// console.log(groceryList);

// let quote = "All the world;s a play";
// quote = quote.toLowerCase();
// let quoteArray = quote.split(' ');
// console.log(quoteArray)
// quoteArray = quoteArray.reverse();
// console.log(quoteArray);
// quote = quoteArray.join(' ');
// console.log(quote);
//
// let wishList = [25, 15, 34, 8, 59];
// function checkWishListPrices(wishList){
//     for (let i = 0; i < wishList.length; i++){
//         if (wishList[i] > 50){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkWishListPrices(wishList));

// function checkWishListTotal(wishList){
//     let total = 0;
//     for (let i = 0; i < wishList.length; i++){
//     total += wishList[i];
//     }
//     return total <= 100;
//
// console.log(checkWishListTotal(wishList));

// function processWishList(wishList, testFunctional, testFunctional2){
//     return testFunctional(wishList) && testFunctional2(wishList);
// }
//
// console.log(processWishList(wishList, checkWishListPrices, checkWishListTotal));
//
// function zatannaMagic(string){
//     let commandArray = string.toLowerCase().split(" ");
//     for (let i = 0; i< commandArray.length; i++){
//         commandArray[i].split('').reverse().join('');
//     }
//     return commandArrayy.join(' ') + "!";
// }

//*****************************************************************************************************************

// OBJECT LECTURE
// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
// }
// console.log(currentWeather.temp);
// console.log(currentWeather.feels_like);
// console.log(currentWeather.description);
// console.log(currentWeather["humidity"]);
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);

// You can do anything to an object property that you can do to any other variable
// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95){
//     console.log("It;s kinda of hot");
// } else {
//     console.log("It's cool today for Texas");
// }

// loop through an array using for in loop
// for (let property in currentWeather) {
//     console.log(property + " " + currentWeather[property]);
// }

// Dynamically add new properties to existing objects
// currentWeather.uvIdex = 9.79;
// console.log(currentWeather.uvIdex);
// ------------------------------------------------------------------------------------------------------------------
// Object Destructuring
const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}
const {make,model, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);

const outputCarInfo = ({make, model, year, mileage} = car) => {console.log(`${year} ${make}${model} with ${mileage}`)}
outputCarInfo(car);


// ARRAY OF OBJECTS

// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];

// Loop over an array of objects
// Using for loop
// for(let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`)
// }
// for each loop needs instructions, needs function
// element,index,

// Use forEach loop
// hourlyWeather.forEach(function(forecast) {
//         console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feels like ${forecast.feels_like}`);
//     });

// hourlyWeather.forEach(forecast => console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feels like ${forecast.feels_like}`)

// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];
//
// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);

// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function (opponent) {
//         console.log(`${opponent.name} has ${opponent.hitPoints} hit points`);
//         console.log(this.name + " attacks!");
//         let damage = Math.ceil(Math.random() * this.maxDamage);
//         console.log(`${this.name} does ${damage} points of damage!`);
//         opponent.hitPoints -= damage;
//         console.log(`${opponent.name} now has ${opponent.hitPoints} hit points`);
//     }
// }
//
// let monster = {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6,
//         console.log(this.name + " attacks!");
//             // method def
//         }
//     }

// Let's create a controller object to handle anything players or game objects do that affects the state of the game. The controller might handle taking user input an d calculating the input's effect on the game.

// let controller = {
//     attack: function (attacker, defender) {
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
//     }
// }
//
// let view = {
//     displayAttackResults: function (attacker, defender, defenderHPBeforeAttack, damage){
//         console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         console.log(`${defender.name} now has ${defender.hitPoints} hit points`);
//         console.log("------------------------");
//     }
// }
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8,
//     }
// }
//         monster = {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6,
//     }

// controller.attack(model.fighter,model.monster);
// controller.attack(model.monster, model.fighter);

// Creating objects
// define an empty object and creat properties dynamically
// let goblin = {};
// goblin.name = "Goblin";

// create a function that returns objects

// function makeMonster(name, hitPoints, maxDamage){
//     return {
//         name: name, // property def : value
//         hitPoints: hitPoints,
//         maxDamage: maxDamage,
//     }
// }
// model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobgoblin, model.fighter);

// use an object constructor

// function Monster(name, hitPoints, maxDamage){
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.maxDamage = maxDamage;
// }
//
// model.hobgoblinCaptin = new Monster("Hobgoblin Captain", 39, 14);
//
// controller.attack(model.hobgoblinCaptin, model.fighter);
//
// for (let property in model){
//     console.log(model[property].name);
// }

/*


*/

