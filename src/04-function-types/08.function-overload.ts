// 函数重载

// 1. 重载签名
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 2. 实现签名
function add(a: any, b: any): any {
  const result = a + b;
  console.log(result);
  return result;
}

add(1, 2);
add("1", "2");
// add(1, "2"); // 报错，因为实现签名中没有定义 number + string 的情况，只能是 number + number 或者 string + string
// add("1", 2); // 报错，因为实现签名中没有定义 string + number 的情况，只能是 number + number 或者 string + string

export {};
