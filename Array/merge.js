let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];
let arr3 = [];
// let arr3 = [...arr1, ...arr2]; we can use spread operator but this is for building logic
for (let  i = 0; i < arr1.length; i++){
    arr3[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i];
}


console.log(arr3);
