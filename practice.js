let arr = [2, 4, 5, 6];

// 2

let target = 9;

// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// let answer =  twoSum(arr, target);

// console.log(answer);


function twoSum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
        console.log(numIndices);
    }

    // If no solution is found
    return null;


}


twoSum(arr, target);
