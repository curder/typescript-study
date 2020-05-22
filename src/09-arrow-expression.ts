// 箭头表达式：用来声明匿名函数，消除传统函数this指向的问题

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(
    arr.filter((item) => item % 2)
)

function getName(name: string = "curder") {
    this.name = name;

    // setInterval(function () {
    //     console.log(this.name) // got "undefined"
    // }, 1000)

    setInterval(() => {
        console.log(this.name)
    }, 1000)
}

getName()

