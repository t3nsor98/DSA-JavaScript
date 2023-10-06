//indirect recursion
// calling a different function inside an function
let money = 100;
let totalApple = 0;

function buyApple(x) {
    if (x > 0) {
        console.log(`I have ${x} Rs and ${totalApple} Apples!!`);
        buyMore(x);
    } else {
        console.log("You don't have enough Money");
    }
}

function buyMore(x) {
    totalApple++;
    buyApple(x - 10);

}

buyApple(money);