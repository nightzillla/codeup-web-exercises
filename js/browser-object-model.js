// setInterval() EXAMPLE
// let count = 0;
// let max = 10;
// let interval = 1000; // interval time in milliseconds
//
// let intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);
//****************************************************************************************************************************
// setTimeout() EXAMPLE
let delay = 5000; // delay time in milliseconds

let timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);
// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring
//****************************************************************************************************************************

// let sayHey = function() {
//     let count = 0;
//     function hey() {
//         if (count < 10) {
//             console.log('hey ' + count);
//             count++;
//         } else {
//             clearInterval(theInterval);
//         }
//     }
//     let theInterval = setInterval(hey, 1000);
// }

// let count = 0;
//
// function hey() {
//     if (count < 10) {
//         console.log("hey " + count);
//         count++;
//     } else {
//         clearInterval(thisTimeItWillStop);
//     }
// }
// let thisTimeItWillStop = setInterval(hey, 1000);

// function thenHeys () {
//     let count = 0;
//     let thisWillStop = setInterval(function(){
//         if (count < 10){
//             console.log("hey " + count);
//             count ++;
//         } else {
//             clearInterval(thisWillStop);
//         }
//     }, 1000);
// }

// setTimeOut(wakeUpUser, 5000);
//
// function wakeUpUser() {
//     alert("WAKEEE UPPPP!!!!");
// }