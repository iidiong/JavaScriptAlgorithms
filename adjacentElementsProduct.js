function adjacentElementsProduct(nums){
    let result = 0;

    for(let i=0; i<nums.length-1; i++){
        result = nums[i] * nums[i + 1] > result ? nums[i] * nums[i + 1]: result;
    }
    return result;
}
let arr = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(arr));