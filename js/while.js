// Create a (while) loop that uses console.log() to creat the output shown below
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// let number = 2;
// while (number <=65536){
//     console.log(number);
//     number *= 2; // number = number * 2
// }
//************************************************************************************************************************
//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// let allCones = Math.floor(Math.random() * 51)+ 50; //< this is to generate 50-100// Math.floor(Math.random() * 50)+ 50;
// // let conesWanted = Math.floor(Math.random() * 5) + 1;
// do{
//     let conesWanted = Math.floor(Math.random() * 5) +1;
//     if (conesWanted > allCones) {
//         console.log(`Cannot sell you ${conesWanted} I only have ${allCones}`);
//     }else{
//         console.log(`${conesWanted} sold...`)
//         allCones = allCones - conesWanted;
//     }
//     console.log(`${allCones} left`);
// } while (allCones > 0);
// console.log("Yay! I sold them all!");

//************************************************************************************************************************
// while loop 0-100
// this is the loop control variable
// initialize it to a starting value
// let count = 100;
// // check the value of the loop control variable in a conditional test
// while(count >= 0){ // conditonal statement
//     console.log(count);
//     // change the value of the loop control variable
//     count = count -1;
//     // initialize, check value, alter its value
// }
for(let count = 100; count >= 0; count = count -1){ //
    console.log(count);
}
// shorthand let count = let i // meaning iterator
// for(let i = 100; i >= 0; i--){
//     console.log(i);
// }

//while loop increasing to 0 - 100
// let i = 0;
// while (i < 100){
//     // i++; <-- 100 in the loop but you'll show 1-100
//     console.log(i);
//     i++;
// }
// console.log("Outside the loop: " + i);

// for loop compare to while loop let i = 0;
for (i = 0; i < 100; i++){
    console.log(i);
}
console.log("Outside the loop " + i);