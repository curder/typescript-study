// Rest And Spread 操作符：用来声明任意数量的方法参数
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
func1(1, 2, 3, 4, 5);
func1(1, 2, 3);
// 将任意长度的数组转化成固定参数的函数接收
function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args1 = ['a', 'b', 'c'];
func2.apply(void 0, args1);
var args2 = ['x', 'y', 'z', 'K'];
func2.apply(void 0, args2);
