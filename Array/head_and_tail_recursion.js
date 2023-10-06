// tail recursion
function test(x) {
    // console.log(x);
    if (x > 0) {
        test(x - 1);
    }
    console.log(x);
}

test(10);

// head recursion
// function test(x) {
//     console.log(x);
//     if (x > 0) {
//         test(x - 1);
//     }
//     // console.log(x);
// }

// test(10);