//2.
// function showMultiplicationTable(value) {
//     for (i = 1; i <= 10; i++) {
//         let result = i * value
//         console.log(`${value} * ${i} = ${result}`);
//     }
// }
//*********************************************************************************************************************
// 3.
  // asking 20 to 200 so sub to equal 180 + 1, +20 because it's small
// console.log(random);
for (let i = 0; i < 10; i++) {
    let random;
    random = Math.ceil(Math.random()*181 + 20);
    if (random % 2 === 0) { // is even
        console.log(`${random} is even!`)
    } else {
        console.log(`${random} is odd!`)
    }
}
// //*********************************************************************************************************************
// 4.
//let n = 9; // height of pattern
let string = ""
for (let i = 1; i <= 10; i++) { //10 is the height

    for (let j = 1; j <= i ; j++) {
        string += i;
    }
    string += "\n";
    }
    console.log(string);

// 5.
for (let i = 100; i > 0; i -=5) {
    console.log(i);
}
//************************************************************************************************************************