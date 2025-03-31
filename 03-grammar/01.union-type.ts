// 联合类型的基本使用
let foo: number | string = 123;

foo = "456";
console.log(foo);

// 函数参数
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId(101); // 101
printId("bob"); // BOB

export {};
