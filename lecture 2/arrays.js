const numArray = [1,2,4,5,6];
const students = ["Rohit","Rohan","Roshan"];

let numbers = new Array(1,2,3,4,5,6);
//these are the methods of creating an array;

console.log(numbers);

numbers.push(12);// to add at end;
console.log(numbers)

numbers.pop()//removes element from last

numbers.unshift(21)// add at first;

numbers.shift()// removes from starting

console.log(numbers);

console.log(numbers.includes(2))// checks weather the numbers is there in array or not
console.log(numbers.indexOf(2))// gives index of input value

console.log(numbers.join())// converts to string


let Array1 = [1,3,4,562,112,3];
console.log(Array1.slice(1,3))// slices and prints the array

let Array2 = [5,43,33,22,11];
console.log(Array2.splice(2,4))
console.log(Array2)// here when splice is used, the difference is that the array is cut and displayed, the range is inlcuded and also it gets cuts from the original array

// Arrys continued...

