// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// let output = '';

// prices.forEach((price, index,array) => {
//
//     const tax =(price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p id="price-${index+1}">item number: ${index + 1}. Price: ${price}. Tax: $${tax}. Total: $${total}.</p>`;
//     $("div").html(output);
//     if (index === array.length-1) {
//         $("div").append("<p>That's it!</p>");
//     }
// });

// const priceAfterTax = prices.map(price => {
//     const tax =(price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
// console.log(prices);
// console.log(priceAfterTax);
//
// // const doubleArray = prices.map(price => price * 2);
// // console.log(doubleArray);
//
// const desserts = ['sherbet', 'whisky cake', 'cupcake', 'eclair'];
//
// // const eatingDessert = desserts.map(dessert => ` Eating ${dessert} Yummm!!`);
// // eatingDessert.forEach(element => {
// //     $("div").append(`<p>${element}</p>`);
// // })
//     // ARRAY OF OBJECTS
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];
// const milages = car.reduce ((accumulator, car) => {
//     accumulator.push(car.mileage);
//     return accumulator;
// },[]);
// console.log(milages);
// const highestMileages = cars.reduce((accumulator, car) => {
//     accumulator.push(car.mileage);
//     return accumulator;
// }, []).reduce((accumulator, mileage) => {
//     return Math.max(accumulator, mileage);
// });
// console.log(highestMileages);
// const mileages = cars.map(car => car.mileage);
// console.log(mileages)
//
// const newObject = cars.map(car => {
//     car.newProp = 'new property';
//     return car;
// });
// console.log(cars[0]);
//
// const array = [4,5,7,9];
//
// function doubleArray(array){
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] * 2);
//     }
//     return newArray;
// }
// console.log(doubleArray)
//
// const doubleArray2 = prices.map(price => price * 2);
// console.log(doubleArray2);
//
// const under10k = cars.filter(car => car.mileage < 10000);
// // we are using object deconstruction
// under10k.forEach(({make,model, mileage}) => {
//     output += `<p> I found a ${make} ${model} with ${mileage} miles</p>`;
//     $("#output").html(output);
// });
//
// prices.filter(price => price < 10)
//     .map(price => {
//     const tax =(price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
//     }).forEach(price => $("div").append(`<p>${price}</p>`));
//                                         // accumulator, element,
// const totalCost = prices.reduce(function (total,price){
//     return total + price;
// });
// console.log(totalCost);
// console.log(totalCost);
// The function passed to the reduce method takes an extra parameter, the accumulator
// The accumulator is often abbreviated "acc"

// Finding the average price.
// const averagePrice = prices.reduce((function(accumulator, current, index, array){
//     accumulator += current;
//     if(index === array.length - 1) {
//         return accumulator/array.length;
//     }
//     return accumulator;
// }));

// console.log("You have $158.76 in your shopping cart");
// const total = prices.reduce(function(total, priceOfItem){
//     return total + priceOfItem
// }, 158.76);
// console.log(`Your total cost is ${total.toFixed(2)}.`);
// // forEach (element, index, array)

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// .filter always return an array
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// var evens = numbers.filter(function(n) {
//     return n % 2 === 0;
// });
/** OLD WAY */
let threeLangOld = [];
for (let i = 0; i < users.length; i++) {
    console.log(users[i].languages.length);
    if (users[i].languages.length > 2) {
        threeLangOld.push(users[i]);
    }
}
console.log(threeLangOld);
/**  USING .filter */
let threeLanguage = users.filter(function(person) {
        return person.languages.length >= 3;
    });
console.log(threeLanguage);

/** Use .map to create an array of strings where each element is a user's email address */
let userEmail = users.map(function(el){
    return el.email
});
// let userEmail = users.map(el => {
//     let element = {};
//     element[el.email] = el.email;
//     return element;
// });
console.log(userEmail)

/**  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average. */
let totalYears = users.reduce(function(totalYears,user){
                return user.yearsOfExperience + totalYears;
    },0);
console.log(`The user have a total of ${totalYears/users.length} years of experience.`);
console.log(totalYears/users.length);

/**  Use .reduce to get the longest email from the list of users. */
let longestEmail = users.reduce(function(longest, user){
    // if(longest.length < user.email.length) {
    //     return user.email;
    // } else {
    //     return longest;
    // }
    return longest.length < user.email.length ? user.email : longest
},'');
console.log(`The longest user email is :${longestEmail}`);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let listUser = users.reduce(function(acc, user){
    return acc + user.name + ",";
}, 'Your instructors are: ');
console.log(listUser);

