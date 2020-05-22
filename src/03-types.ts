// ts中的基本类型：number 数值类型 、string 字符串类型 、boolean 布尔类型 、void 没有返回值、any 任意类型、自定义类型

let myName: string = "curder";
myName = 29;

// 如果不显示的声明变量类型，则会通过类型推导出变量的类型，比如下面的alias变量的类型为：String
let alias = "curder"
alias = 29

// 如果一个变量可以为任意类型，设置为 any
let anyVar: any = "curder"
anyVar = 29

// 声明和使用自定义类型
class Person {
    name: string;
    age: number;
}
var curder: Person = new Person()
curder.name = "curder"
curder.age = 29
