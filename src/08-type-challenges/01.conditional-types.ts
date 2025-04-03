type IdType = string | number;
// 1. conditional types
// 判断 number 类型 是否继承自 IdType
type IsNumber = number extends IdType ? true : false; // type IsNumber = true
// 判断 boolean 类型 是否继承自 IdType
type IsBoolean = boolean extends IdType ? true : false; // type IsBoolean = false

// 2. 重构函数重载

function sum<T extends string | number>(
  a: T,
  b: T
): T extends number ? number : string;
function sum(a: any, b: any): any {
  return a + b;
}

sum(1, 2); // 3
sum("1", "2"); // 12

export {};
