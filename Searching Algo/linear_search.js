//linear search using Iterative method
// will have to revise before interview
let data = [1,2,3,4,5,6,7,8,9,10];
let find = 7;
let start = 0;
let end = data.length - 1;
let position = undefined;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(data[mid] === find) {
        position = mid;
        break;
    }else if (data[mid] < find) {
        start = mid + 1;
    }else {
        end = mid - 1;
    }
}

console.log(position);