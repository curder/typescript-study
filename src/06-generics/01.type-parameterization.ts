// 类型参数化
function identify<T>(arg: T): T {
  return arg;
}

console.log(identify("Jack"));
console.log(identify(18));
console.log(identify({ name: "Jack", age: 18 }));

export {};
