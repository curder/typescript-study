// 非空类型断言

interface IPerson {
  name: string;
  age: number;
  friend?: {
    name: string;
  };
}

const person: IPerson = {
  name: "John",
  age: 18,
};

// 使用可选链操作符 ?. 访问对象的属性
console.log(person.friend?.name);

// 使用非空类型断言 !. 对属性赋值（非空类型断言需要确保对象有值的情况才能使用）
person.friend!.name = "Jane";
console.log(person);

export {};
