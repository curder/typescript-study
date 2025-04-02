// 默认参数
function sum(nums: number[], start = 0, end = nums.length): number {
  let res = 0;
  for (let i = start; i < end; i++) {
    res += nums[i];
  }
  return res;
}
console.log(sum([1, 2, 3]));

console.log(sum([1, 2, 3], undefined));

export {};
