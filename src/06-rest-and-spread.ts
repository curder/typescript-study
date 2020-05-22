// Rest And Spread 操作符：用来声明任意数量的方法参数

function func1(...args) {
    args.forEach(function (arg) {
        console.log(arg)
    })
}

func1(1, 2, 3, 4, 5);
func1(1, 2, 3);


// 将任意长度的数组转化成固定参数的函数接收
function func2(a: string, b: string, c: string) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let args1 = ['a', 'b', 'c'];
func2(...args1);

let args2 = ['x', 'y', 'z', 'K'];
func2(...args2)
