/**
 * @param {number[]} nums - An array of numbers.
 * @return {number[]} - An array containing the absolute differences between the left and right sums of each element.
 */
var leftRightDifference = function (nums) {
    // Initialize an array to store the sums of elements to the left of each element
    let leftsum = [];

    // Calculate the left sums
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        // Iterate over elements to the left of the current element and calculate the sum
        for (let j = 0; j < i; j++) {
            sum += nums[j];
        }
        // Push the left sum into the leftsum array
        leftsum.push(sum);
    }

    // Initialize an array to store the sums of elements to the right of each element
    let rightsum = [];

    // Calculate the right sums
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        // Iterate over elements to the right of the current element and calculate the sum
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
        }
        // Push the right sum into the rightsum array
        rightsum.push(sum);
    }

    // Initialize an array to store the absolute differences between left and right sums
    let result = [];

    // Calculate the absolute differences and push them into the result array
    for (let i = 0; i < leftsum.length; i++) {
        // Calculate the absolute difference using Math.abs()
        let diff = Math.abs(leftsum[i] - rightsum[i]);
        // Push the absolute difference into the result array
        result.push(diff);
    }

    // Return the array containing absolute differences
    return result;
};
