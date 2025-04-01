// 泛型参数使用约束

// 使用 keyof 关键字来约束泛型的类型
function getProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const obj = {
  name: "Jack",
  age: 18,
  height: 180,
};

const name = getProperty(obj, "name");
const age = getProperty(obj, "age");
const height = getProperty(obj, "height");
// const weight = getProperty(obj, "weight"); // 类型“"weight"”的参数不能赋给类型“"name" | "age" | "height"”的参数。

export {};
