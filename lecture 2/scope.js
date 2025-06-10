let outerWear = "T-Shirt"; // global scope
function myOutfit() {
    let outerWear = "sweater"; // local scope
    return outerWear; // returns the local variable
}
console.log(outerWear);

console.log(myOutfit()); // calls the function and returns the local variable
console.log(outerWear); // still returns the global variable