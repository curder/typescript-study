// 字面量类型

// 字面量类型：指的是具体的值，比如 1、"hello"、true 等
const name: "zhangsan" = "zhangsan";
const age: 18 = 18;
const flag: true = true;
console.log(name, age, flag);

// 将多个字面量类型联合起来，形成一个新的字面量类型
type Direction = "left" | "right" | "top" | "bottom";
const direction: Direction = "top";
console.log(direction);

// 字面量类型的应用场景：函数的参数类型注解
type methodType = "get" | "post" | "put" | "delete" | "patch";
function request(url: string, method: methodType) {
  console.log(url, method);
}
request("/user", "post");

// 定义一个对象
const requestInfo = {
  url: "/user",
  method: "post",
};
// 报错：类型“"string"”的参数不能赋给类型“methodType”的参数。
// request(requestInfo.url, requestInfo.method);

// 解决方案一：requestInfo.method 进行类型断言
request(requestInfo.url, requestInfo.method as "post");

// 解决方案二：将 requestInfo 对象的类型定义为字面量类型
const requestInfo2: { url: string; method: "post" } = {
  url: "/user",
  method: "post",
};
request(requestInfo2.url, requestInfo2.method);

// 解决方案三：使用 as const 定义 requestInfo 对象
const requestInfo3 = {
  url: "/user",
  method: "post",
} as const;
request(requestInfo3.url, requestInfo3.method);

export {};
