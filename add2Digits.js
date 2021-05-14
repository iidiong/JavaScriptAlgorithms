// Add two digit integer of n, and return the sum

function add2Digits(digits) {
let sum = 0;
let numArray = digits.toString().split("");
    for (let item of numArray){
    sum = sum + Number.parseInt(item);
}
    return sum;
}

console.log(add2Digits(1)); // 1
console.log(add2Digits(99)); // 18
console.log(add2Digits(57)); // 12
