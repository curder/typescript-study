// 分发类型
type toArray<T> = T extends any ? T[] : never;

type stringArray = toArray<string>; // string[]
type numberArray = toArray<string | number>; // number[]
type numberAndStringArray = toArray<number | string>; // string[] | number[]
