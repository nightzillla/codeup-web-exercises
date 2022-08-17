//
// function showMultiplicationTable(value) {
//     for (i = 1; i <= 10; i++) {
//         let result = i * value
//         console.log(`${value} * ${i} = ${result}`);
//     }
// }

let random = Math.ceil(Math.random()*181 + 20); // asking 20 to 200 so sub to equal 180 + 1, +20 because it's small
// console.log(random);
for (i = 20; i < 200; i++)
    if (random % 2 === 0) // is even
        console.log(`${random} is even!`)
   else{
    (random % 2 == 1) // is odd
        console.log(`${random} is odd!`)}
