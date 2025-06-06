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