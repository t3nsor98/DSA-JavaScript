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