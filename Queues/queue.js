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
dequeue();
display();