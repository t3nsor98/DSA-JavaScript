let queue = [];
let currentSize = queue.length;
let maxSize = 6;

function enqueue(newVal) {
    if (currentSize < maxSize) {
        queue[currentSize] = newVal;
        currentSize++;
    }else {
        console.log("Queue is already full.");
    }
}

function display() {
    console.log(queue);
}

function dequeue() {
    if (currentSize > 0) {
        for (let i = 0; i < currentSize; i++) {
            queue[i] = queue[i+1];
        }
        currentSize--;
        queue.length = currentSize;

    }else {
        console.log("Queue is already empty.")
    }
}

function front() {
    let frontNum = currentSize > 0 ? queue[0] : "Queue is already empty.";
    console.log(frontNum);
}

function back() {
    let backNum = currentSize > 0 ? queue[currentSize - 1] : "Queue is already empty.";
    console.log(backNum);
}



enqueue(10);
enqueue(29);
enqueue(60);
display();
enqueue(10);
enqueue(29);
enqueue(60);
display();
enqueue(10);
enqueue(29);
enqueue(60);
display();
dequeue();
display();
front();
back();