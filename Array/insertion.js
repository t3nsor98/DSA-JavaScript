let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newEl = 11;
let position = 5;
let len = arr.length;

console.log(arr);

for (let i = len - 1; i >= 0; i--) {
    if (i >= position) {
        arr[i + 1] = arr[i];
        if (i == position) {
            arr[i] = newEl;
        }
    }

}

console.log(arr);
