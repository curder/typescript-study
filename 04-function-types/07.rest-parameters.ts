// 剩余参数
function sum(...nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  return res;
}

console.log(sum(1, 2, 3)); // 6

export {};
