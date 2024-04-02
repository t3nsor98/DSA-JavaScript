let arr = new Array(5);
let arr2 = [];


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let myNewSet = myArray.map((item, index, array) => {
    // console.log(item, array, index);
})

let myNewSet2 = myArray.filter((item, index, array) => {
    return index > 3;
})

// console.log(myNewSet2);

let check = myArray.some((item) => {
    return item > 8;
})

console.log(check);

// every will check for every element in the array