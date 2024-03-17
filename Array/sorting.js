//sorting using nested for loops
const arr = [20, 40, 30, 12, 25,155];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);

// const data = arr.sort((a, b) => (a - b));
// console.log(data);