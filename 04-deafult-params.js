// 参数类型：在参数名称后面使用冒号:来指定参数类型
// 默认参数：在参数声明后面使用等号来指定参数的默认值
var myname = "curder";
function test(a, b, c) {
    if (c === void 0) { c = "default value"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test("x", 'y', 'z');
test('x', 'y');
