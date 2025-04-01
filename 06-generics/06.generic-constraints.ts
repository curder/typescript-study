// 泛型约束
interface ILength {
  length: number;
}
// 使用 extens 关键字来约束泛型的类型
function getLength<T extends ILength>(arg: T): T {
  return arg;
}

getLength("aaa");
getLength([1, 2, 3]);
getLength({ length: 1 });

export {};
