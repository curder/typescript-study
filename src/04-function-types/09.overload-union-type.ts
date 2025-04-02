// 函数重载+联合类型
function getLength(x: string | any[]) {
  return x.length;
}

console.log(getLength("123")); // 3
console.log(getLength([1, 2, 3])); // 3

export {};
