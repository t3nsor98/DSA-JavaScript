// lets merge two sorted arrays
let a = [7,9,13,17,21];
let b = [2,5,14,24,30,56];
let c = [];

let p1 = 0;
let p2 = 0;
let p3 = 0;

while (p1 < a.length && p2 < b.length) {
    if (a[p1] > b[p2]) {
        c[p3] = b[p2];
        p2++;
    } else {
        c[p3] = a[p1];
        p1++;
    }
    p3++;
}

while (p2 < b.length) {
    c[p3] = b[p2];
    p2++;
    p3++;
}

console.log(c);
