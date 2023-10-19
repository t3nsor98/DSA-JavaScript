//selection sort descending order
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