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
for(let i = 1; i <= 5; i++){
    if (i % 2 !== 0) {
        console.log(i)
    }
}
for(let i = 5; i >= 1; i--){
    if (i % 2 !== 0) {
        console.log(i)
    }
}
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