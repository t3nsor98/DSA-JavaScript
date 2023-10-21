//lets do selection sort in JS
let items = [100, 1112, 42, 1, 5, 8, 2, 11, 0];

function selectionSort(data) {
    let minIndex;
    for (let i = 0; i < data.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        // let temp = data[minIndex];
        // data[minIndex] = data[i];
        // data[i] = temp;
        [data[i], data[minIndex]] = [data[minIndex], data[i]];
    }

    console.log(data);
}

selectionSort(items);