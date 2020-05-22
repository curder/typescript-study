// 参数类型：在参数名称后面使用冒号:来指定参数类型

// 默认参数：在参数声明后面使用等号来指定参数的默认值
var myname: string = "curder"

// 如果多个参数需要有默认值，带默认值参数需要放在函数参数的最后面
function test(a: string, b: string, c: string = "default value") {
    console.log(a)
    console.log(b)
    console.log(c)
}

test("x", 'y', 'z')
test('x', 'y')