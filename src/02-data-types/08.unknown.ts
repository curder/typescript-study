let unknownValue: unknown = "Hello World";
unknownValue = 123;

console.log(unknownValue); // 123

// unknown 类型的变量不能赋值给其他类型的变量
// let str: string = unknownValue; // Error: Type 'unknown' is not assignable to type 'string'.

// unknown 类型默认情况下在上面进行任意的操作都是不允许的
// 必须进行类型的校验(缩小)后才能进行对应的操作
if (typeof unknownValue === "string") {
  console.log(unknownValue.length);
}
