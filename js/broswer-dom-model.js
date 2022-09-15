// DOM Document Object Model (DOM)
let accessTheDOM = document.getElementById("dc"); // getElementById is a method
let showMe = accessTheDOM.innerHTML;
let marvel = document.getElementById("marvel");
// alert(showMe);
console.log(showMe)
let preference = "dc"
let like = document.getElementById("like");
let dontLike = document.getElementById("dontLike");
let output = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
console.log(output);

accessTheDOM.innerHTML += " Animated Universe";
marvel.setAttribute('class', 'hotpink'); //use attribute = 'class'

// let hotPinks = document.getElementsByClassName('hotpink'); // node list come back by an Array, node is a object representing an object
// for (let i = 0; i < hotPinks.length; i++) {
//     hotPinks[i].style.color = 'red';
    //hotPinks[i].style.fontSize = '2em'
// }

// hotPinks.forEach(function (element) {
//     element.style.color = 'green';
// })

// let submitButton = document.getElementById("colorSubmission");
// submitButton.onclick = function () {
//     let colorInput = document.getElementById("colorPreference");
//     let paragraphs = document.getElementsByTagName("p");
//     for (let i = 0; i < paragraphs.length; i++){
//         paragraphs[i].style.color = colorInput.value;
//     }
// }
let submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function(){
    let colorInput = document.getElementById("colorPreference");
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = colorInput.value;
    }
}
// <p id="hulk" data-state="hulk" data-strength="super" data-intelligence="low">The Hulk</p> <!-- Data attribute-->

let theHulk = document.getElementById("hulk");
// let hulkState = theHulk.getAttribute("data-state")
// theHulk.innerText += ` is in ${hulkState} state`;
let hulkState = theHulk.dataset.state;
let hulkStrength = theHulk.dataset.strength;
let hulkIntelligence = theHulk.dataset.intelligence;
let hulkSummary = `The Hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummary;

let transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    // alert("hi");
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === "hulk") {
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`
}