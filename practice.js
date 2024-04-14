/**
 * @param {string} s
 * @return {string}
 */

// "3[a]2[bc]"
var decodeString = function (s) {
    // Initialize an empty stack to hold characters
    let stack = [];
    // Initialize an empty string to build the decoded string
    let str = '';

    // Loop through each character in the input string s
    for (let i = 0; i < s.length; i++) {
        // If the current character is a closing bracket
        if (s[i] === ']') {
            // Initialize an empty string to hold the substring
            let substr = '';

            // Pop characters from the stack until an opening bracket is found
            while (stack[stack.length - 1] != '[') {
                substr = stack.pop() + substr;
            }
            // Pop the opening bracket '[' from the stack
            stack.pop();

            // Initialize an empty string to hold the repetition count
            let k = '';

            // Pop characters from the stack to get the repetition count
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k;
            }

            // Repeat the substring 'substr' 'k' times and push it back onto the stack
            stack.push(...substr.repeat(k));
        } else {
            // If the current character is not a closing bracket, push it onto the stack
            stack.push(s[i]);
        }
    }

    // Join the stack elements into a single string to get the decoded string
    return stack.join('');
};


