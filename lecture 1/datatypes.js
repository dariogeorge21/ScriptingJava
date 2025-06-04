"use strict";//treat all Js code as newer version

alert("Helllo!!");//does not work in nodejs only in browser

let name = "Dario"
let age = 18;
let loggedIn = true;

//Primitive Datatypes
/*
number => limit 2^53
bigint => for big number
string " "
boolean true/false
null - standalone value
undefined 
symbol - unique

Non primitive datatypes
Arrays
Functions
objects
*/

let greet = function(){
    console.log("Hello World!!");
}//function

let fruits = ["apple","banana","mango"];//array

let aboutMe = {
    name:"Dario George",
    age:18,
    course:"BTech",
    title: "Developer"
}//object


console.log(typeof null) //object
console.log(typeof undefined) //undefined 


console.log(typeof greet)
