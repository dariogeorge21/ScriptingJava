function helloWorld(){
    console.log("Hello World");// function definition
}

helloWorld();// fucntion call

function add(a, b){
    return a + b; // function definition
}
console.log(add(5, 10)); // function call
function multiply(a, b){
    return a * b; // function definition
}
console.log(multiply(5, 10)); // function call
function subtract(a, b){
    return a - b; // function definition
}
console.log(subtract(10, 5)); // function call
function divide(a, b){
    return a / b; // function definition
}
console.log(divide(10, 5)); // function call
function square(a){
    return a * a; // function definition
}
console.log(square(5)); // function call
function cube(a){
    return a * a * a; // function definition
}

// global scope
let globalVariable = "I am global"; // global scope
function globalFunction() {
    let localVariable = "I am local"; // local scope
}

