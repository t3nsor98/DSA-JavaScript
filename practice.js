//Insertion sort

let items = [11, 23, 5, 4, 3, 2, 1, 0];
//

function insertionSort(data) {
    let i, current, j;
    for (i = 1; i < data.length; i++) {
        current = data[i];
        j = i - 1;
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j -= 1;

        }
        data[j + 1] = current;
    }
}