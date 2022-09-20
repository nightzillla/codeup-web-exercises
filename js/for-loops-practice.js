// DIFFERENT VARIATION OF FOR LOOPS
// for
// for of
// for in
// while
// do while
// forEach

// 1st Initialization     let 1 = 0;
// 2nd Condition          i < 5;
// 3rd Final Expression   i ++;
// const names = ['john', 'bob', 'mary', 'joe'] // name is an array
// for loop
// for(let i = 0; i < names.length; i ++) {
//     console.log(names[i]); // [i] gives you all the name in the array
//     console.log(names[i].length);// [i].length will give you the # of length in the array.
//     if(i === 2) break; // it will count john = 0; bob = 1; mary = 2;
// }
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
let arr = [[1,2],[3,4],[5,6]];
function printArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
//**********************************************************************************************************************
// 3. Write a function printEven() prints all the even numbers of a 2D array using for loops.
let val = [13,23,12,45,22,48,66,100]
function printEven(val) {
    for(let i = 0; i < val.length; i++) {
        if(val[i] % 2 === 0) {
            console.log(val[i]);
        }
    }
}
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

