// 可选参数：在方法的参数声明后面使用问号来标明此参数为可选参数
function optionalParams(a, b, c) {
    if (c === void 0) { c = "default value"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
optionalParams('aaa');
