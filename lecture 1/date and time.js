let myDate = new Date();

console.log(myDate.toString())// string conversion
console.log(myDate.toLocaleString())// conversion for readability
console.log(typeof myDate)// type => object

let bday = new Date(2007,2,20,11,30) // get a specific date and time
console.log(bday.toLocaleString()) 

console.log(bday.getTime());// to get miliseconds from the default 1970 time

console.log(Date.now())// usually gives the number of miliseconds

console.log(Math.floor(Date.now()/1000))// gives in seconds

console.log(myDate.getMonth()+1)// starts from 0 month as array
console.log(myDate.getDay())// starts from monday