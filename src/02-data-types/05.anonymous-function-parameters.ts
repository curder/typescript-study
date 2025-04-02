const names = ["Alice", "Bob", "Eve"];

// 匿名函数最好不要添加类型注解，因为 TS 可以自动推断出类型
names.forEach((name) => {
  console.log(name.toUpperCase());
});

export {};
