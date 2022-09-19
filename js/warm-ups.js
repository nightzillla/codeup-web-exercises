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


// Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
// Bonus: if there are any values that are not strings, return false;


let stringArray = ["Jabba", "Darth Maul", "Hondo", "buzzworthy"];
function longestString(arrayOfStrings){
    let longest = '';
    for (let i =0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length){ //longest = arrayOfStrings[i];
            longest = arrayOfStrings[i];
        }
    }
    return longest;
}



const attendance = {
    miami: 32789,
    buffalo: 45678,
    portland: 24567,
}
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

function averageAttendance(attendanceObject) {
    let total = 0;
    for (const prop in attendance) {
        total += attendance[prop];
    }
    return total/Object.keys(attendance).length;
}
// Given the attendance object, write a function that returns an object with totalAttendnace and averageAttendance properites set to the correct value.

function createObject(averageAttendance) {
    let total = 0;
    for (const prop in attendance) {
        total += attendance[prop];
    }
    return {
        totalAttendance: total,
        averageAttendance: total/Object.keys(attendance).length
    }
}

