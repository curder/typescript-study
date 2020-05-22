// 多行字符串
let muitlpartString = `a
b
c`
console.log(muitlpartString)

// 字符串模版
// 在一个字符串中插入多个变量或者表达式
let myString = "curder";

function getString() {
    return "curder";
}

console.log(`hello ${myString}`)
console.log(`hello ${getString()}`)


// 自动拆分字符串
function test(template, name: string, age: Number|Function) {
    console.log(template)
    console.log(name)
    console.log(age)
}

let myName = `curder`;
let getAge = () => {
    return 29;
}

test`Hello, my name is ${myName}, I'm ${getAge};`