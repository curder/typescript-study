// 调用签名
interface IBar {
  name: string;
  age: number;
  // 函数调用签名
  (x: number): number;
}
const bar: IBar = (x: number): number => {
  return x;
};

bar.name = "zhangsan";
bar.age = 20;
bar(1);

export {};
