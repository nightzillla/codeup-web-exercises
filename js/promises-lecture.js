
$.get("data/mural.json", function(data) {
    console.log(data)
});

// Fetch API
fetch("data/murals.json").then(function(response) {
    return response.json();
}).then(function(data){
    console.log(data);
});

fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

// Callback: a function passed as an argument to another function; it can be run after another function has finished running
function greeter(greeting, name, displayFunction) {
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

function displayToOutputDiv(output) {
    $("#output").html(output);
}

greeter("Hola", "Javier", displayToOutputDiv);

// setTimeout( () => greeter("Aloha", "Jason", displayToOutputDiv), 3000);
setTimeout(function() {
    greeter("Aloha", "Jason", displayToOutputDiv)
}, 3000);

setTimeout(greeter, 3000, "Yo", "dude", displayToOutputDiv)
    // function sayHello(greeting, name){
    //     greeting = `${greeting}, ${name}`;
    //     displayOutput(greeting);
    // }
    // sayHello("Hello", "Javier");
    // // let greeting = sayHello("Hola", "Javier");
    //
    // function displayOutput(output) {
    //     $("#output").html(output);
    // }
    // displayOutput(greeting);
//**********************************************************************************************
// const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
// const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
// function generateGreeting(greetingsArray, namesArray, displayFunction){
//     let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
//     const name = namesArray[Math.floor(Math.random() * namesArray.length)];
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting);
// }
// generateGreeting(greetings, names, displayToOutputDiv);

// setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv);

// This is a callback
const aPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if (Math.random() > 0.5) {
            resolve("I was fulfilled!");
        } else {
            reject("I was rejected!");
        }
    }, 3000);
});

aPromise.then(value => console.log(value)).catch(error => console.log(error));
// fetch call will return a promise.
// fetch("data/murals.json").then(response => response.json()).then(data => console.log(data));
const myFetchPromise = fetch("data/murals.json").then(response => {
    console.log(response.status);
    console.log(response.headers);
    console.log(response.url);
    return response.json();
}
    ).then(data => console.log(data)).catch(error => console.log("Oh no, it doesn't work!"))
    .finally(() => console.log("I'm gonna happen no matter what"));

console.log(myFetchPromise);

fetch("https://api.github.com/users/nightzillla", {
    headers: {

    }
}).then( response => response.json())
    .then( events => console.log(events))
    .catch( error => console.error(error));


