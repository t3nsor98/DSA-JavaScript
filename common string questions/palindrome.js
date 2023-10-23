//check if a string is palindrome or not
let str = "leveel";
function palindrome(data) {
    let start= 0;
    let end = data.length - 1;
    let result = true;
    while (end > start) {
        if(data[start] !== data[end]) {
            result = false;
        }
        start++;
        end--;
    }
    return result;
}

console.log(palindrome(str));