// 映射类型
type MappedPerson<T> = {
  // 使用索引签名
  [P in keyof T]: T[P];
};

interface IPerson {
  name: string;
  age: number;
}

type newPerson = MappedPerson<IPerson>;
const p: newPerson = {
  name: "Jack",
  age: 18,
};
console.log(p.name); // Jack
console.log(p.age); // 18

export {};
