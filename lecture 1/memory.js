/*
There are two types of memory:
Stack memory: Used for primitive datatypes. Here a copy of value is sent.
Heap Memory: Used for non primitive (reference) datatypes. Here the complete object is sent. Not a copy.
*/

let userOne={
    email: "user@gmail.com",
    age:22
}
let userTwo=userOne;

userTwo.email="dario@google.com";
console.log(userOne.email);