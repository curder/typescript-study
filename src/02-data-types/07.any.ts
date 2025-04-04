// any 类型
// any 类型可以表示任何类型，包括基本类型、对象类型、函数类型、数组类型、元组类型、枚举类型、类类型、接口类型、泛型类型、null 和 undefined 类型等等。
// 但是，any 类型是不安全的，因为 any 类型可以表示任何类型，所以 any 类型的变量可以赋值给任何类型的变量，但是 any 类型的变量不能赋值给其他类型的变量。
let id: any = 123;

id = "456";

console.log(id);

export {};
