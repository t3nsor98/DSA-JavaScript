//Maximum occurring character in a String.
let str = "digbijayaaa";
let strObj = {};
let maxKey = "";
for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (!strObj[key]) {
        strObj[key] = 0;
    };
    strObj[key]++;
    if (maxKey == "" || strObj[key] > strObj[maxKey]) {
        maxKey = key;
    }
}

console.log(maxKey, ":" ,strObj[maxKey],);
console.log(strObj);