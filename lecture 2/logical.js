let num = 25;

if (num < 50 && num%5 === 0) {
    console.log("num is less than 50 and divisible by 5"); // this will execute
}
if (num > 20 || num < 30) {
    console.log("num is greater than 20 or less than 30"); // this will execute
}
if (!(num === 25)) {
    console.log("num is not equal to 25"); // this will not execute
}