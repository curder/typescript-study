// 指定数组类型注解的方式：
// 1. 类型 + 方括号，string[] 数组类型，并且数组中的元素都是 string 类型

let nums = [1, 2, 3];
// 注意：在开发时，数组一般存放的都是同一类型的数据，不要存放不同类型的数据

// 2. 泛型，Array<string> 数组类型，并且数组中的元素都是 string 类型
let strings: Array<string> = ["a", "b", "c"];

console.log(nums, strings);

export {};
