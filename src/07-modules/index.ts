import { sum } from "./utils/math";
import { type IType, type IPerson } from "./utils/type";
import { price, date } from "./utils/format";

console.log(sum(1, 2)); // 3

const id: IType = 1;
const p: IPerson = {
  name: "Jack",
  age: 18,
};
console.log(id); // 1
console.log(p); // { name: 'Jack', age: 18 }

console.log(price.format(1.2345)); // $1.23
console.log(date.format(new Date())); // 2021-01-01

export {};
