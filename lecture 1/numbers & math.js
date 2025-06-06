let number=100;
let anotherNumber = new Number(1000.33);
console.log(anotherNumber);

console.log(typeof((anotherNumber.toString())));// converts the number to string

console.log(anotherNumber.toFixed(1));// removes decimal; specify decimal spaces

let newNum = 323.935

console.log(newNum.toPrecision(5))// precises(round off) number to that many digits (if >5 then (n-1) else n-1 remains unchanged)

let largeNum = 10000000;

console.log(largeNum.toLocaleString('en-IN'))// adds comma to numbers for better readability

console.log(Math.abs(-4))// Math is type of library which has multiple functions
//abs converts all numbers to positive

console.log(Math.sqrt(9));// to find square root

