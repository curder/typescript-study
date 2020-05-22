// 可选参数：在方法的参数声明后面使用问号来标明此参数为可选参数

function optionalParams(a: string, b?: string, c: string = "default value") {
    console.log(a)
    console.log(b) // 需要在函数体中处理可选参数未传递的情况
    console.log(c)
}

optionalParams('aaa')

// 如果一个函数有多个参数，那么可选参数的声明不允许声明在必须参数的后面