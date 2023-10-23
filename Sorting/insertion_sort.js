//Insertion sort in JavaScript

let arr = [6,5,54,564,5645,56146,6541,12,6464,684,4848,454,1];

function insertionSort(data) {
    let i, j, current;
    for (i = 1; i < data.length; i++) {
        current = data[i];
        j = i - 1;
        while(j >= 0 && data[j] > current) {
            data[j+1] = data[j];
            j -= 1;
        }
        data[j+1] = current;
    }

    return data;
}

console.log(insertionSort(arr));

// //lets practice insertion sort in JavaScript
// //we will use one for loop na done while loop for this.
// let numbers = [1, 5, 8, 7, 9, 6, 3, 7, 4, 0];
// function insertionSort(data) {
//     let i, j, current;
//     for (i = 1; i < data.length; i++) {
//         j = i - 1;
//         current = data[i];
//         while (j >= 0 && data[j] > current) {
//             data[j + 1] = data[j];
//             j -= 1;
//         }
//         data[j + 1] = current;
//     }
//     return data;
// }

// console.log(insertionSort(numbers));