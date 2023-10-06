let arr = [12,34,45,566,6,5,3,2,5,12];

let position = 3;
for (let i = position; i < arr.length -1; i++) {
    arr[i] = arr[i+1];

}

arr.length = arr.length-1;

console.log(arr);