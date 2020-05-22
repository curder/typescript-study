// generator函数：控制函数的执行过程，手工暂停和回复代码执行
function* doSomething() {
    console.log("strict");
    yield;
    console.log("finish");
}

var func1 = doSomething();
func1.next() // 第一次调用不会执行yield下面的代码
func1.next() // 再次调用菜执行yield下面的代码


function* getPrice(stock: string) {
    while (true) {
        yield Math.random() * 100;
    }
}

let IBMPrice = getPrice("IBM")

let limitPrice = 15

let currentPrice = 100 // 当前临界价格

while (currentPrice > limitPrice) {
    currentPrice = IBMPrice.next().value;
    console.log(`the generator return ${currentPrice}`);
}

console.log(`buying at ${currentPrice}`)

