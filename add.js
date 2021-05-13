function add(nums) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// This function converts the numbers input into array, and the loop through the array
function add1(...nums) {
    let total = 0;
    nums.forEach(num => total += num);
    return total;
}
console.log(add(2, 3)) // 5
console.log(add(2, 4, 6, 7)) // 19
console.log(add(1, 2, 3, 4, 5)) // 15

console.log(add1(2, 3)) // 5
console.log(add1(2, 4, 6, 7)) // 19
console.log(add1(1, 2, 3, 4, 5)) // 15
