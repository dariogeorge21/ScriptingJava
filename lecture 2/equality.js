let num = 5; 
if (num === 5) { // strict equality check
    console.log("num is equal to 5"); // this will execute
}
if (num == "5") { // loose equality check
    console.log("num is loosely equal to '5'"); // this will execute
}
if (num !== 5) { // strict inequality check
    console.log("num is not equal to 5"); // this will not execute
}
if (num != "5") { // loose inequality check
    console.log("num is not loosely equal to '5'"); // this will not execute
}