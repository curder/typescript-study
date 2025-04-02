// 泛型支持多个类型参数
function foo<T, E>(arg1: T, arg2: E): [T, E] {
  return [arg1, arg2];
}

console.log(foo(1, "Jack"));
console.log(foo("Jack", 1));

export {};
