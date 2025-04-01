// 可选参数
// 可选参数可以在函数调用时省略，此时会被自动赋值为 undefined
// 可选参数必须放在所有参数的末尾
function sum(nums: number[], start?: number, end?: number): number {
  let res = 0;
  for (let i = start || 0; i < (end || nums.length); i++) {
    res += nums[i];
  }
  return res;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([1, 2, 3], 1)); // 5
console.log(sum([1, 2, 3], 1, 2)); // 2

export {};
