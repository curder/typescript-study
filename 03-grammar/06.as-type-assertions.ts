// 类型断言 as

// 获取 DOM 元素
const className = document.querySelector(".img") as HTMLImageElement;
const img = document.getElementById("img") as HTMLImageElement;
const div = document.getElementById("div") as HTMLDivElement;
const input = document.getElementById("input") as HTMLInputElement;

// 类型断言规则
const age = 18;
// const age2 = age as string; // 1. 【非法】类型断言：将 number 类型断言为 string 类型
const age3 = age as unknown as string; // 2. 【合法】 类型断言：将 number 类型断言为 unknown 类型，再将 unknown 类型断言为 string 类型
const age4 = age as any as string; // 3. 【合法】 类型断言：将 number 类型断言为 any 类型，再将 any 类型断言为 string 类型
