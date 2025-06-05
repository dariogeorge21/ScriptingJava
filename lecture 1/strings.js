let course="Computer Science "
let repoCount=55

console.log(course+repoCount+" Timeline:4Yrs")// Concatenation - Outdated

console.log(`Hello my course is ${course} and my repository count is ${repoCount}`)

// Another method of declaring a string

const name = new String ("Dario");
console.log("Uppercase: ",name.toUpperCase());// copy converts to uppercase
console.log("Lowercase: ",name.toLowerCase());// copy converts to lowercase
console.log(name.charAt(0));// character at index =>0
console.log(name.indexOf('a'))// index value of input

let subString = name.substring(0,3)// negative index does not work
console.log(subString);

let anotherString = name.slice(-4,4);// here negative index can be used
console.log(anotherString);

let email = "    user@google.com   ";
console.log(email.trim());// removes the leading and trailing whitespaces and line terminators

let url = "https://dario%20george.com";
console.log(url.replace('%20','-'));// to replace



