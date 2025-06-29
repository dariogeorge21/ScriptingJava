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

console.log(Math.round(4.4));// round function

console.log(Math.ceil(3.2));// greatest upper value

console.log(Math.floor(3.2))// least value

console.log(Math.max(1,2,3,4,5))// Max value

console.log(Math.min(1,2,3,4))// Min value

console.log(Math.random())// returns a random value between 0 and 1

console.log(Math.floor(Math.random()*10)+1)// return a random between 1 and 10;

// random between limits

const max = 30;
const min = 5;

console.log(Math.floor(Math.random()*(max-min+1)+min))// a formula basic
