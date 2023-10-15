//Recursive approach of binary search
let array = [1,2,3,4,5,6,7,8,9,45,60,99];
let start = 0;
let end = array.length - 1;
let find = 60;
let position = undefined;

function recursiveBinarySearch(data, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (data[mid] === find) {
        position = mid;
        console.log(`The position of ${find} is ${position}`);
    }else if (data[mid] > find) {
        recursiveBinarySearch(data, start, mid - 1);
    }else {
        recursiveBinarySearch(data, mid + 1, end);
    }
}

recursiveBinarySearch(array, start, end);
