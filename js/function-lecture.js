alert("Hello world!");
// "use strict";
// The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. Parentheses with zero or more parameters
// 4. If there is more than one parameter, the list is comma separated
// 5. Curly braces contain the function body
// 6. The function body contains the code that runs when the function is invoked
// 7. [optional but common] return statement

 function sayHello(greetings, name) {
     //console.log(`${greetings}, ${name}`);
     return `${greetings}, ${name};`
 }
 // Here number has local scope
// the console.log will result in an error
// function localOrGlobal(){
//  let number = 20;

// Here number has global scope
//  let number = 20;
//  function localOrGlobal(){
//      console.log(number);
//  }

// function declaration
 let number = 20;
 function localOrGlobal() {
     let number = 10;
     console.log(number);
 //    anotherName = 23; <--- glitch
 }
 localOrGlobal();
 console.log(number);
 // console.log(anotherName);
 //   output is 10, 20

// function expression
// function expressions are not hoisted, so this wont work
// bark();
// const bark = function(){
//     console.log("woof!");
// }
// yap(); // hoisted
//
//  function yap(){
//     console.log("yip yip");
//  }

// function expression
// const add = function(num1, num2){
//  return num1 + num2;
//}

// function declaration
// function add(num1, num2){
//     return num1 + num2;
// }

// arrow function -- if it only returns something, you don't need a return keyword
// if you use more than 1 line you would need to use "return"
const add = (num1, num2) => num1 + num2;
// ^ same as function add(num1, num2){ <--- short hand
//             return num1 + num2

//if there is only one parameter, you don't need parentheses around the parameter
const addTen = number => number + 10;

// if there are no parameters, you use empty parentheses
const helloWorld = () => "Hello World";