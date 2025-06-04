let num1 = prompt("Enter number1: ");
let num2 = prompt("Enter number2: ");
let num3 = prompt("Enter number3: ");

if (num1>num2){
    if (num1> num3){
        console.log(`${num1} is largest`);
    }else{
        console.log(`${num3} is largest`);
    }
}else{
    if (num2>num3){
        console.log(`${num2} is largest`);
    }
    else{
        console.log(`${num3} is largest`);
    }
}