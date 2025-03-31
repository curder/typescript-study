const info = ["jack", 18]; // 数组
const info2 = { name: "jack", age: 18 }; // 对象
const info3: [string, number] = ["jack", 18]; // 元组

// 元组的应用场景
// 1. 函数返回值
function getInfo(): [string, number] {
  return ["jack", 18];
}
