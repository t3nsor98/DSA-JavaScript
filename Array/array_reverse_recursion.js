//array reversal using recursion

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// shortcut method
// console.log(data.reverse());

function reversal(arr, start, end) {
    console.log(arr);
    let temp;
    if (start <= end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        reversal(arr, start + 1, end - 1);
    }
    
}

reversal(data, 0, data.length - 1);