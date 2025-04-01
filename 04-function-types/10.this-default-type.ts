// this 默认类型

// 1. 对象中函数的 this 默认类型是 any
const obj = {
  name: "obj",
  getName() {
    // 默认情况下, this是any类型
    return this.name;
  },
};

// 2. 普通函数
function getName() {
  // 默认情况下, this是any类型
  return this;
}

export {};
