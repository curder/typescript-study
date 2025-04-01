// 泛型接口
interface IPerson<S = string, N = number> {
  name: S;
  age: N;
  slogan: S;
}

const p: IPerson = {
  name: "Jack",
  age: 18,
  slogan: "I am Jack",
};

console.log(p);

export {};
