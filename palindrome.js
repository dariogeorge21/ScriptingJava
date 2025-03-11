function palindrome(string){

    
    if (string == (string.split("").reverse().join(""))){
        return true;
    }
    else{
        return false;
    }
}
let str="malayalam"
let result= palindrome(str);
console.log(result);