
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

    function sayHello(greeting, name){
        return `${greeting}, ${name}`;
    }
    let greeting = sayHello("Hola", "Javier");

    function displayOutput(output) {
        $("#output").html(output);
    }
    displayOutput(greeting);
