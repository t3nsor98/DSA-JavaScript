// anagram checker
let str1 = "listen";
let str2= "silent";

function anagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(anagram(str1, str2));

