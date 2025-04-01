// 明确类型

// 1. 对象中函数的 this 默认类型是 any
const obj = {
  name: "obj",
  getName(this: {}) {
    console.log(this);
  },
};

// 2. 普通函数
function getName(this: { name: string }) {
  console.log(this);
}
getName.call({name: 'Curder'});
export {};
