let arr = [1, 2, 13, 4, 5, 6, 7, 8, 9, 10, 124];
let find = 6;
let start = 0;
let end = arr.length - 1;
let position = undefined;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === find) {
        position = mid;
        break;
    } else if (arr[mid] > find) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

console.log(position);