// Javascript Set

let mySet = new Set();
// we can add elements to set
mySet.add(65);
mySet.add(99);
mySet.add(45);
mySet.add(35);
mySet.add(90);
mySet.add("Digbijaya");


// we can find the size of array
let length = mySet.size;
console.log(length);

// we can check if an element is exist in this array
let answer = mySet.has("Digbijaya");
console.log(answer);

// we can delete item from set

mySet.delete(90);
console.log(mySet);

// loop through set
for (let item of mySet) {
    console.log(item);
}

// we can convert the set into an Array
const myArray = Array.from(mySet);
console.log(myArray);


