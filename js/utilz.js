// “If the argument is null or not a number” use this.
// if(typeof userInput !== “number” || typeof userInput === null)


function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null)
}
