// 1. 在 TS 中如果一个函数没有返回值，那么可以使用 void 类型来表示
// 2. 如果返回值是 void 类型，也可以返回 undefined
function sum(nums: number[]) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  console.log(res);

  return undefined; // 可以省略，因为默认返回 undefined
}

sum([1, 2, 3]); // 6
