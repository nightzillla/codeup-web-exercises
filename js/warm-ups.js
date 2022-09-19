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

// Given the attendance object, write a function that returns the total attendance across all team,
// Given the attendance object, write a function that returns the average attendance
// Given the attendance object, write a function that returns an object with totalAttendnace and averageAttendance properites set to the correct value.

const attendance = {
    miami: 32789
    buffalo: 45678
    portland: 24567
}

