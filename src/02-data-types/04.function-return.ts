// 函数返回值类型注解，可以明确指定，也可以通过 TS 的类型推断来确定

function sum(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  return res;
}

console.log(sum([1, 2, 3]));

export {};
