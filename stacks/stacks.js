//lets build a stack
// first come last out
// FILO First In las out

let myStack = [];
let currentSize = myStack.length;
let max = 5;
function push(newVal) {
    if (currentSize >= max) {
        console.log(`stack is full, you cant add ${newVal}`);
    } else {
        myStack[currentSize] = newVal;
        currentSize++;
    }
}

function pop() {
    if (currentSize > 0) {
        currentSize -= 1;
        myStack.length = currentSize;
    } else {
        console.log('the stack is empty');
    }
}

push(5);
push(12);
push(5);
push(12);
push(5);
push(12);
pop();
pop();
pop();
pop();
pop();
pop();


console.log(myStack);