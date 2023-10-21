//selection sort descending order

//method 1
let item = [1, 2, 3, 4, 5, 6];

function selectionSortDes(data) {
    let minIndex;
    for (let i = data.length - 1; i >= 0; i--) {
        minIndex = i;
        for (let j = i - 1; j >= 0; j--) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        [data[i], data[minIndex]] = [data[minIndex], data[i]]
    }

    console.log(data);
}

selectionSortDes(item);

//method 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function descendingSort(data) {
//     let minIndex = undefined;
//     for (let i = 0; i < data.length; i++) {
//         minIndex = i;
//         for (let j = i + 1; j < data.length; j++) {
//             if (data[j] > data[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         [data[i], data[minIndex]] = [data[minIndex], data[i]];
//     }
//     console.log(data);
// }

// descendingSort(arr);