function getLucky(s, k) {
  // Convert each letter to its corresponding position in the alphabet and concatenate them
  let num = "";
  for (let i = 0; i < s.length; i++) {
    num += (s.charCodeAt(i) - "a".charCodeAt(0) + 1).toString();
  }

  // Repeat the transformation k times
  for (let i = 0; i < k; i++) {
    let sum = 0;
    for (let j = 0; j < num.length; j++) {
      sum += parseInt(num[j]);
    }
    num = sum.toString();
  }

  return parseInt(num);
}

// Example usage:
console.log(getLucky("iiii", 1)); // Output: 36
console.log(getLucky("leetcode", 2)); // Output: 6
console.log(getLucky("zbax", 2)); // Output: 8
