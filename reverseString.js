let str = prompt("Enter string: ");
let reverse="";
for (let i=0;i<str.length;i++){
    reverse+=str[str.length-i];
}
console.log(reverse);