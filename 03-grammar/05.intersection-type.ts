// 交叉类型：多种类型同时存在
type newType = number & string; // type newType = never

interface IPerson {
  name: string;
  age: number;
}
interface IStudent {
  study: () => void;
}
const student: IPerson & IStudent = {
  name: "John",
  age: 18,
  study: () => {
    console.log("study");
  },
};
