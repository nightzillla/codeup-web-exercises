const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = '';

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

const priceAfterTax = prices.map(price => {
    const tax =(price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});
console.log(prices);
console.log(priceAfterTax);

// const doubleArray = prices.map(price => price * 2);
// console.log(doubleArray);

const desserts = ['sherbet', 'whisky cake', 'cupcake', 'eclair'];

// const eatingDessert = desserts.map(dessert => ` Eating ${dessert} Yummm!!`);
// eatingDessert.forEach(element => {
//     $("div").append(`<p>${element}</p>`);
// })
    // ARRAY OF OBJECTS
const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage);
console.log(mileages)

const newObject = cars.map(car => {
    car.newProp = 'new property';
    return car;
});
console.log(cars[0]);

const array = [4,5,7,9];

function doubleArray(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}
console.log(doubleArray)

const doubleArray2 = prices.map(price => price * 2);
console.log(doubleArray2);

const under10k = cars.filter(car => car.mileage < 10000);
// we are using object deconstruction
under10k.forEach(({make,model, mileage}) => {
    output += `<p> I found a ${make} ${model} with ${mileage} miles</p>`;
    $("#output").html(output);
});

prices.filter(price => price < 10)
    .map(price => {
    const tax =(price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
    }).forEach(price => $("div").append(`<p>${price}</p>`));
                                        // accumulator, element,
const totalCost = prices.reduce(function (total,price){
    return total + price;
});
console.log(totalCost);
console.log(totalCost);
